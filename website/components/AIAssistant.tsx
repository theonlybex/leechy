'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, Minimize2, X, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/lib/categories'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ListingData {
  title?: string
  category?: string
  pricePerDayUsd?: number
  imageUrl?: string
  ownerName?: string
  location?: string
}

type ConversationStep = 
  | 'idle' 
  | 'ask_title' 
  | 'ask_category' 
  | 'ask_price' 
  | 'ask_image' 
  | 'ask_owner' 
  | 'ask_location' 
  | 'confirm'

export function AIAssistant() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! 👋 I'm your Leechy assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [conversationStep, setConversationStep] = useState<ConversationStep>('idle')
  const [listingData, setListingData] = useState<ListingData>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const isOnListingPage = pathname === '/listings/new'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Detect when user opens assistant on listing page
  useEffect(() => {
    if (isOpen && isOnListingPage && conversationStep === 'idle' && messages.length === 1) {
      // Start asking questions directly
      setTimeout(() => {
        addAIMessage("Great! Let me help you create your listing. 🎉\n\nFirst, what's the title or name of the item you want to rent out?")
        setConversationStep('ask_title')
      }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isOnListingPage])

  const addAIMessage = (text: string) => {
    const aiResponse: Message = {
      id: Date.now().toString(),
      text,
      isUser: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, aiResponse])
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentMessage = message.toLowerCase().trim()
    setMessage('')
    setIsTyping(true)

    // Small delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 800))

    // Handle conversation based on current step
    if (conversationStep === 'idle') {
      // If not on listing page, provide general help
      if (!isOnListingPage) {
        addAIMessage("I'd be happy to help! 😊 I can assist you with:\n\n• Finding the perfect rental items\n• Posting your own listings (go to the listing page and I'll help you!)\n• Account and payment questions\n• Platform tips and tricks\n\nJust let me know what you're looking for!")
      }
    } else if (conversationStep === 'ask_title') {
      setListingData(prev => ({ ...prev, title: message }))
      addAIMessage(`Perfect! "${message}" sounds great! ✨\n\nNow, which category does this item belong to?\n\n${CATEGORIES.map((cat, idx) => `${idx + 1}. ${cat}`).join('\n')}\n\nYou can type the number or the category name.`)
      setConversationStep('ask_category')
    } else if (conversationStep === 'ask_category') {
      let category = ''
      // Check if user entered a number
      const categoryNumber = parseInt(currentMessage)
      if (!isNaN(categoryNumber) && categoryNumber >= 1 && categoryNumber <= CATEGORIES.length) {
        category = CATEGORIES[categoryNumber - 1]
      } else {
        // Try to match category name
        const matchedCategory = CATEGORIES.find(cat => 
          cat.toLowerCase().includes(currentMessage) || 
          currentMessage.includes(cat.toLowerCase())
        )
        if (matchedCategory) {
          category = matchedCategory
        }
      }

      if (category) {
        setListingData(prev => ({ ...prev, category }))
        addAIMessage(`Great choice! ${category} it is. 📦\n\nHow much would you like to charge per day (in USD)? Please enter just the number.`)
        setConversationStep('ask_price')
      } else {
        addAIMessage("I didn't quite catch that. Please choose from the list:\n\n" + CATEGORIES.map((cat, idx) => `${idx + 1}. ${cat}`).join('\n'))
      }
    } else if (conversationStep === 'ask_price') {
      const price = parseFloat(message)
      if (!isNaN(price) && price > 0) {
        setListingData(prev => ({ ...prev, pricePerDayUsd: price }))
        addAIMessage(`$${price}/day - Got it! 💰\n\nNow, please provide an image URL for your item. This should be a link to an image (starting with http:// or https://).`)
        setConversationStep('ask_image')
      } else {
        addAIMessage("Please enter a valid price (just the number, e.g., 25 or 99.99)")
      }
    } else if (conversationStep === 'ask_image') {
      const urlPattern = /^https?:\/\/.+/i
      if (urlPattern.test(message)) {
        setListingData(prev => ({ ...prev, imageUrl: message }))
        addAIMessage(`Perfect! Image URL saved. 📸\n\nWhat's your name? (This will be shown as the owner of the listing)`)
        setConversationStep('ask_owner')
      } else {
        addAIMessage("Please provide a valid URL starting with http:// or https://")
      }
    } else if (conversationStep === 'ask_owner') {
      if (message.length >= 2) {
        setListingData(prev => ({ ...prev, ownerName: message }))
        addAIMessage(`Nice to meet you, ${message}! 👋\n\nFinally, where is this item located? (e.g., "San Francisco, CA")`)
        setConversationStep('ask_location')
      } else {
        addAIMessage("Please enter a valid name (at least 2 characters)")
      }
    } else if (conversationStep === 'ask_location') {
      if (message.length >= 2) {
        const finalData = { ...listingData, location: message }
        setListingData(finalData)
        addAIMessage(`Excellent! 🎊\n\nHere's a summary of your listing:\n\n📝 Title: ${finalData.title}\n📦 Category: ${finalData.category}\n💰 Price: $${finalData.pricePerDayUsd}/day\n📸 Image: ${finalData.imageUrl}\n👤 Owner: ${finalData.ownerName}\n📍 Location: ${finalData.location}\n\nShall I fill this into the form for you? Reply "yes" to confirm or "no" to cancel.`)
        setConversationStep('confirm')
      } else {
        addAIMessage("Please enter a valid location (at least 2 characters)")
      }
    } else if (conversationStep === 'confirm') {
      if (currentMessage.includes('yes') || currentMessage.includes('y')) {
        // Dispatch event to fill the form with typing animation
        window.dispatchEvent(new CustomEvent('fillListingForm', { 
          detail: { data: listingData, animated: true }
        }))
        addAIMessage("Done! ✅ I'm filling in all the information for you. Watch the magic happen! ✨")
        setConversationStep('idle')
        setListingData({})
      } else {
        addAIMessage("No problem! The information has been cleared. Feel free to ask me anything else! 😊")
        setConversationStep('idle')
        setListingData({})
      }
    }

    setIsTyping(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-cyan-700/80 to-green-600/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 text-white hover:from-cyan-700/90 hover:to-green-600/90 transition-all duration-200 p-4"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={cn(
        "bg-gradient-to-r from-cyan-700/35 to-green-600/35 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 flex flex-col",
        isMinimized ? "h-14 w-80" : "h-[500px] w-96"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/10 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-green rounded-full">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-semibold text-lg">Leechy Assistant</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-xs">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 h-auto"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Chat Content */}
        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  <div className={cn(
                    "max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-md",
                    msg.isUser
                      ? "bg-brand-green text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md"
                  )}>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div className={cn(
                      "text-xs mt-1 opacity-70",
                      msg.isUser ? "text-white/70" : "text-gray-600"
                    )}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 max-w-[75%] px-4 py-3 rounded-2xl rounded-bl-md text-sm shadow-md">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">Leechy Assistant is typing</span>
                      <div className="flex gap-1 ml-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20 bg-white/5 rounded-b-2xl">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none"
                    style={{ minHeight: '44px', maxHeight: '100px' }}
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-brand-green hover:bg-brand-green-dark text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
