// import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
// import { Button } from "./components/ui/button";
// import { Card } from "./components/ui/card";
// import { ImageWithFallback } from "./components/figma/ImageWithFallback";
// import { VirtualKeyboard } from "./components/VirtualKeyboard";
// import { Camera, Send, Search, Zap, MoreHorizontal, ArrowLeft, Plus, Home, Building } from "lucide-react";
// import leechyLogo from 'figma:asset/f2b9fc888894308b71e32244e3cbfdeeb8822f4c.png';

// export default function App() {
//   const handleKeyPress = (key: string) => {
//     console.log('Key pressed:', key);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 p-8 flex items-center justify-center">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-green-300/30 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-teal-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-green-300/20 to-emerald-400/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative flex gap-8 items-center">
//         {/* First Screen - Robot Introduction with Keyboard */}
//         <div className="w-80 h-[680px] bg-gradient-to-b from-emerald-200/40 to-green-300/30 rounded-[40px] overflow-hidden backdrop-blur-2xl border border-white/40 shadow-2xl flex flex-col">
//           <div className="p-6 pb-0 flex-1">
//             {/* Status Bar */}
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-sm">9:41</span>
//               <div className="flex gap-1">
//                 <div className="flex gap-1">
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                 </div>
//                 <div className="w-6 h-3 border border-black rounded-sm">
//                   <div className="w-4 h-full bg-green-600 rounded-sm"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-lg overflow-hidden">
//                   <ImageWithFallback
//                     src={leechyLogo}
//                     alt="LeechyAI Logo"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <span>LeechyAI</span>
//               </div>
//               <MoreHorizontal className="w-5 h-5" />
//             </div>

//             {/* Robot Character */}
//             <div className="flex justify-center mb-8">
//               <div className="relative">
//                 <div className="w-24 h-24 bg-gradient-to-br from-emerald-400/70 to-green-600/70 rounded-full flex items-center justify-center shadow-xl">
//                   <div className="w-18 h-18 bg-gradient-to-br from-emerald-500/70 to-green-700/70 rounded-full flex items-center justify-center">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Robot arms */}
//                 <div className="absolute -left-6 top-1/2 w-12 h-6 bg-gradient-to-r from-emerald-300/70 to-green-500/70 rounded-full transform -translate-y-1/2"></div>
//                 <div className="absolute -right-6 top-1/2 w-12 h-6 bg-gradient-to-l from-emerald-300/70 to-green-500/70 rounded-full transform -translate-y-1/2"></div>
//                 {/* Robot body */}
//                 <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-emerald-200/70 to-green-400/70 rounded-full"></div>
//               </div>
//             </div>

//             {/* Main Text */}
//             <div className="text-center mb-8">
//               <h1 className="text-xl mb-3">Your Rental</h1>
//               <h1 className="text-xl mb-3">Assistant. Smart</h1>
//               <h1 className="text-xl mb-4">Property Finder.</h1>
//             </div>

//           </div>

//           {/* Message Input - Above keyboard */}
//           <div className="flex gap-2 mb-4 px-6">
//             <div className="flex-1 bg-white/10 rounded-full px-4 py-2 flex items-center border border-white/40">
//               <Plus className="w-4 h-4 mr-2 text-gray-600" />
//               <span className="text-sm text-gray-600">Write your message...</span>
//             </div>
//             <Button size="sm" className="bg-emerald-600/80 hover:bg-emerald-700/80 rounded-full w-10 h-10 p-0 backdrop-blur-sm">
//               <Send className="w-4 h-4 text-white" />
//             </Button>
//           </div>

//           {/* Virtual Keyboard - Now at bottom */}
//           <VirtualKeyboard onKeyPress={handleKeyPress} />
//         </div>

//         {/* Second Screen - Chat Interface with Messages */}
//         <div className="w-80 h-[680px] bg-gradient-to-b from-emerald-200/40 to-green-300/30 rounded-[40px] p-6 backdrop-blur-2xl border border-white/40 shadow-2xl">
//           {/* Status Bar */}
//           <div className="flex justify-between items-center mb-8">
//             <span className="text-sm">9:41</span>
//             <div className="flex gap-1">
//               <div className="flex gap-1">
//                 <div className="w-1 h-1 bg-black rounded-full"></div>
//                 <div className="w-1 h-1 bg-black rounded-full"></div>
//                 <div className="w-1 h-1 bg-black rounded-full"></div>
//                 <div className="w-1 h-1 bg-black rounded-full"></div>
//               </div>
//               <div className="w-6 h-3 border border-black rounded-sm">
//                 <div className="w-4 h-full bg-green-600 rounded-sm"></div>
//               </div>
//             </div>
//           </div>

//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-lg overflow-hidden">
//                 <ImageWithFallback
//                   src={leechyLogo}
//                   alt="LeechyAI Logo"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span>LeechyAI</span>
//             </div>
//             <Avatar className="w-8 h-8">
//               <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" />
//               <AvatarFallback>A</AvatarFallback>
//             </Avatar>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 space-y-4 mb-8">
//             {/* AI Message */}
//             <div className="flex gap-3">
//               <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
//                 <ImageWithFallback
//                   src={leechyLogo}
//                   alt="LeechyAI"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4 max-w-[200px] backdrop-blur-md border border-white/40">
//                 <p className="text-sm">Hi there! I'm LeechyAI, your rental marketplace assistant. How can I help you find the perfect property today?</p>
//                 <p className="text-xs text-gray-600 mt-2">9:02 PM</p>
//               </div>
//             </div>

//             {/* User Message */}
//             <div className="flex gap-3 justify-end">
//               <div className="bg-emerald-500/80 text-white rounded-2xl rounded-tr-sm p-4 max-w-[200px] backdrop-blur-sm border border-white/30">
//                 <p className="text-sm">I'm looking for a 2-bedroom apartment in downtown, budget around $1800</p>
//                 <p className="text-xs text-emerald-100 mt-2">9:02 PM</p>
//               </div>
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" />
//                 <AvatarFallback>A</AvatarFallback>
//               </Avatar>
//             </div>

//             {/* AI Response */}
//             <div className="flex gap-3">
//               <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
//                 <ImageWithFallback
//                   src={leechyLogo}
//                   alt="LeechyAI"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4 max-w-[200px] backdrop-blur-md border border-white/40">
//                 <p className="text-sm">Perfect! I found several great options in downtown within your budget. Let me show you the best matches.</p>
//                 <p className="text-xs text-gray-600 mt-2">9:03 PM</p>
//               </div>
//             </div>

//             {/* Typing Indicator */}
//             <div className="flex gap-3">
//               <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
//                 <ImageWithFallback
//                   src={leechyLogo}
//                   alt="LeechyAI"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4 backdrop-blur-md border border-white/40">
//                 <div className="flex gap-1">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Message Input */}
//           <div className="flex gap-2 mb-4">
//             <div className="flex-1 bg-white/10 rounded-full px-4 py-2 flex items-center border border-white/40 backdrop-blur-md">
//               <Plus className="w-4 h-4 mr-2 text-gray-600" />
//               <span className="text-sm text-gray-600">Write your message...</span>
//             </div>
//             <Button size="sm" className="bg-emerald-600/80 hover:bg-emerald-700/80 rounded-full w-10 h-10 p-0 backdrop-blur-sm">
//               <Send className="w-4 h-4 text-white" />
//             </Button>
//           </div>

//           {/* Home Indicator */}
//           <div className="flex justify-center">
//             <div className="w-32 h-1 bg-black/30 rounded-full"></div>
//           </div>
//         </div>

//         {/* Third Screen - Property Search with Keyboard */}
//         <div className="w-80 h-[680px] bg-gradient-to-b from-emerald-200/40 to-green-300/30 rounded-[40px] overflow-hidden backdrop-blur-2xl border border-white/40 shadow-2xl">
//           <div className="p-6 pb-0">
//             {/* Status Bar */}
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-sm">9:41</span>
//               <div className="flex gap-1">
//                 <div className="flex gap-1">
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                   <div className="w-1 h-1 bg-black rounded-full"></div>
//                 </div>
//                 <div className="w-6 h-3 border border-black rounded-sm">
//                   <div className="w-4 h-full bg-green-600 rounded-sm"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//               <ArrowLeft className="w-5 h-5" />
//               <span>Property Search</span>
//               <MoreHorizontal className="w-5 h-5" />
//             </div>

//             {/* Feature Description */}
//             <div className="mb-6">
//               <p className="text-sm mb-4">Show me 2-bedroom</p>
//               <p className="text-sm mb-4">apartments under $2000</p>
//               <p className="text-xs text-gray-600 mb-6">9:03 PM</p>
//               <p className="text-xs text-gray-600 mb-4">Found some great options for you!</p>
//             </div>

//             {/* Generated Images */}
//             <div className="mb-6">
//               <p className="text-xs text-gray-600 mb-4">Here are your top matches</p>
//               <div className="grid grid-cols-2 gap-3 mb-4">
//                 <div className="aspect-square rounded-2xl overflow-hidden">
//                   <ImageWithFallback
//                     src="https://images.unsplash.com/photo-1743008019164-2d810a54915e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjByZW50YWx8ZW58MXx8fHwxNzU1NTI2MTc5fDA&ixlib=rb-4.1.0&q=80&w=400"
//                     alt="Modern apartment rental"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="aspect-square rounded-2xl overflow-hidden">
//                   <ImageWithFallback
//                     src="https://images.unsplash.com/photo-1693948458360-c05c436177a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMHJlbnRhbHxlbnwxfHx8fDE3NTU2MTYzNTJ8MA&ixlib=rb-4.1.0&q=80&w=400"
//                     alt="Luxury house rental"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-3 mb-4">
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/40 backdrop-blur-md">
//                 <Home className="w-4 h-4" />
//               </div>
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/40 backdrop-blur-md">
//                 <Search className="w-4 h-4" />
//               </div>
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/40 backdrop-blur-md">
//                 <Building className="w-4 h-4" />
//               </div>
//             </div>

//             {/* Message Input */}
//             <div className="flex gap-2 mb-4">
//               <div className="flex-1 bg-white/10 rounded-full px-4 py-2 flex items-center border border-white/40 backdrop-blur-md">
//                 <Plus className="w-4 h-4 mr-2 text-gray-600" />
//                 <span className="text-sm text-gray-600">Write your message...</span>
//               </div>
//               <Button size="sm" className="bg-emerald-600/80 hover:bg-emerald-700/80 rounded-full w-10 h-10 p-0 backdrop-blur-sm">
//                 <Send className="w-4 h-4 text-white" />
//               </Button>
//             </div>
//           </div>

//           {/* Virtual Keyboard */}
//           <VirtualKeyboard onKeyPress={handleKeyPress} />
//         </div>
//       </div>
//     </div>
//   );
// }