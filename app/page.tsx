'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map as MapIcon, 
  Bot, 
  Calendar, 
  ChevronUp, 
  Cpu,
  Home,
  Terminal,
  MessageSquare,
  User,
  Sparkles,
  MapPin,
  Code2,
  Target,
  WifiOff,
  X,
  ArrowLeft,
  ChevronLeft,
  ExternalLink,
  Edit2,
  CheckCircle2,
  CloudOff,
  RefreshCw,
  Bookmark,
  Bell,
  BellOff
} from 'lucide-react';
import Image from 'next/image';
import { useOnlineStatus } from '@/hooks/use-online-status';

const SPEAKERS = [
  {
    id: "s1",
    name: "Sundar Pichai",
    role: "CEO",
    company: "Google & Alphabet",
    bio: "Sundar is the CEO of Google and Alphabet and serves on Alphabet's Board of Directors. Under his leadership, Google has been focused on developing products and services, powered by the latest advances in AI.",
    img: "https://picsum.photos/seed/sundar/200/200"
  },
  {
    id: "s2",
    name: "Demis Hassabis",
    role: "CEO",
    company: "Google DeepMind",
    bio: "Demis is the CEO and co-founder of Google DeepMind. He has led DeepMind's groundbreaking AI research, including AlphaGo, AlphaFold, and Gemini.",
    img: "https://picsum.photos/seed/demis/200/200"
  },
  {
    id: "s3",
    name: "Aparna Pappu",
    role: "VP & GM",
    company: "Google Workspace",
    bio: "Aparna leads the Google Workspace team, driving innovation in communication and collaboration products for billions of users worldwide and seamlessly integrating generative AI.",
    img: "https://picsum.photos/seed/aparna/200/200"
  }
];

const SESSIONS = [
  { 
    id: "ses1",
    time: "11:30 AM", 
    duration: "45m",
    title: "Building with Google AI Studio & Gemma 4", 
    loc: "Stage A",
    tag: "AI Lab",
    tagColor: "text-purple-700 bg-purple-50 border-purple-200",
    lineColor: "bg-[#9334E6]",
    speakerIds: ["s2"],
    description: "Join us for a deep dive into the next generation of AI development. We will explore how Gemma 4 and Google AI Studio empower developers to build complex, multimodal generative applications with unprecedented speed and scale. You'll see live demos of new APIs and tooling designed to streamline your workflows.",
    links: [
      { title: "Google AI Studio Documentation", url: "#" },
      { title: "Gemma 4 Models on Kaggle", url: "#" }
    ]
  },
  { 
    id: "ses2",
    time: "1:00 PM", 
    duration: "1h",
    title: "Antigravity: Next-Gen Web Engines", 
    loc: "Stage C",
    tag: "Web",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
    lineColor: "bg-[#4285F4]",
    speakerIds: ["s3"],
    description: "Discover the architecture behind Antigravity, Google's newest web engine framework. Learn how it significantly improves rendering performance and memory management for complex web apps. We'll walk through migration strategies and real-world performance gains.",
    links: [
      { title: "Antigravity GitHub Repo", url: "#" },
      { title: "Web Performance DevGuide", url: "#" }
    ]
  },
  { 
    id: "ses3",
    time: "2:30 PM", 
    duration: "1h 30m",
    title: "Project Astra: Real-time Multimodal Apps", 
    loc: "Sandbox 2",
    tag: "Vision",
    tagColor: "text-red-700 bg-red-50 border-red-200",
    lineColor: "bg-[#EA4335]",
    speakerIds: ["s1", "s2"],
    description: "Get an exclusive look at Project Astra in action. This session explores how to process real-time video, audio, and sensor data seamlessly using our unified multimodal architectures. Learn best practices for maintaining low latency and high accuracy in your intelligent apps.",
    links: [
      { title: "Project Astra SDK Overview", url: "#" }
    ]
  }
];

function GoogleIOApp() {
  const [isMounting, setIsMounting] = useState(true);

  // Simulate loading native modules
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounting(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#E5E7EB] min-h-[100dvh] flex flex-col font-sans selection:bg-purple-200">
      <AnimatePresence mode="wait">
        {isMounting ? (
          <SplashScreen key="splash" />
        ) : (
          <Dashboard key="dashboard" />
        )}
      </AnimatePresence>
    </div>
  );
}

import dynamic from 'next/dynamic';
export default dynamic(() => Promise.resolve(GoogleIOApp), { ssr: false });

function SplashScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-1 bg-gradient-to-b from-[#FAFAFA] to-[#F1F3F4] flex flex-col justify-between sm:max-w-md sm:mx-auto w-full relative sm:shadow-2xl overflow-hidden"
    >
      {/* Main Center */}
      <main className="flex-1 flex flex-col items-center justify-center mt-10">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
           className="text-center relative"
        >
          {/* Decorative aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-blue-400/10 via-purple-400/20 to-pink-400/10 blur-[50px] -z-10 rounded-full animate-pulse" />

          <div className="text-[2.2rem] font-display font-medium text-[#3C4043] tracking-tight leading-none mb-1">
            Google I/O 2026
          </div>
          <div className="text-[3.2rem] font-display font-black bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#9334E6] to-[#EA4335] tracking-tighter leading-none mb-14">
            Concierge
          </div>
          
          <div className="flex flex-col items-center gap-1.5 mt-10">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 px-4 py-1.5 bg-purple-50 rounded-full border border-purple-100"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span className="text-purple-700 text-[11px] font-bold tracking-wide uppercase">Initializing Gemma 4 Engine</span>
            </motion.div>
            <div className="text-[#9CA3AF] text-[10px] font-medium tracking-widest uppercase mt-2">
              Antigravity Framework Mounted
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer - The Tech Stack */}
      <footer className="flex justify-center items-center pb-12 gap-6 relative z-10 w-full px-8">
        {/* Antigravity */}
        <motion.div 
          animate={{ y: [0, -4, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="flex flex-col items-center gap-2.5 flex-1"
        >
          <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 text-[#8AB4F8]">
            <Target strokeWidth={2} className="w-5 h-5" />
          </div>
          <div className="text-[9px] uppercase font-bold text-[#707A8A] tracking-wider text-center pt-0.5">
            Antigravity<br/><span className="text-[#9CA3AF] text-[8px]">Native</span>
          </div>
        </motion.div>

        {/* AI Studio */}
        <motion.div 
          animate={{ y: [0, -4, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col items-center gap-2.5 flex-1"
        >
          <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
            <Code2 strokeWidth={2.5} className="w-5 h-5 text-[#4285F4] relative z-10" />
          </div>
          <div className="text-[9px] uppercase font-bold text-[#202124] tracking-wider text-center">
            AI Studio<br/><span className="text-[#9CA3AF] text-[8px]">Powered</span>
          </div>
        </motion.div>

        {/* Gemma 4 */}
        <motion.div 
          animate={{ y: [0, -4, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex flex-col items-center gap-2.5 flex-1"
        >
          <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 text-[#9334E6]">
            <ChevronUp strokeWidth={3} className="w-5 h-5" />
          </div>
          <div className="text-[9px] uppercase font-bold text-[#707A8A] tracking-wider text-center pt-0.5">
            Gemma 4<br/><span className="text-[#9CA3AF] text-[8px]">E4B</span>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function Dashboard() {
  const isOnline = useOnlineStatus();
  const [activeSpeakerId, setActiveSpeakerId] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentHash(window.location.hash);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeSpeaker = SPEAKERS.find(s => s.id === activeSpeakerId);
  const isSessionRoute = currentHash.startsWith('#session-');
  const isGemmaRoute = currentHash === '#gemma';
  const isProfileRoute = currentHash === '#profile';
  const activeSessionId = isSessionRoute ? currentHash.replace('#session-', '') : null;
  const activeSession = activeSessionId ? SESSIONS.find(s => s.id === activeSessionId) : null;

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState<{ m: number; s: number } | null>(null);

  useEffect(() => {
    // Determine target time (using 30 minutes from now or simulating a tick down)
    // For this context, let's just make it count from 28m 45s down
    let totalSeconds = 28 * 60 + 45;
    
    setTimeLeft({
      m: Math.floor(totalSeconds / 60),
      s: totalSeconds % 60
    });

    const timerInterval = setInterval(() => {
      totalSeconds -= 1;
      if (totalSeconds < 0) totalSeconds = 0;
      setTimeLeft({
        m: Math.floor(totalSeconds / 60),
        s: totalSeconds % 60
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Notes State
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [notesSyncState, setNotesSyncState] = useState<Record<string, 'synced' | 'pending' | 'syncing'>>({});

  useEffect(() => {
    const savedNotes = localStorage.getItem('io_session_notes');
    const savedSyncState = localStorage.getItem('io_session_notes_sync');
    if (savedNotes) setNotes(JSON.parse(savedNotes));
    if (savedSyncState) setNotesSyncState(JSON.parse(savedSyncState));
  }, []);

  const handleNoteChange = (sessionId: string, text: string) => {
    const newNotes = { ...notes, [sessionId]: text };
    setNotes(newNotes);
    localStorage.setItem('io_session_notes', JSON.stringify(newNotes));

    setNotesSyncState(prev => {
      const newState = { ...prev, [sessionId]: isOnline ? 'syncing' : 'pending' };
      localStorage.setItem('io_session_notes_sync', JSON.stringify(newState));
      return newState as any;
    });

    if (isOnline) {
      setTimeout(() => {
        setNotesSyncState(prev => {
          const finalState = { ...prev, [sessionId]: 'synced' };
          localStorage.setItem('io_session_notes_sync', JSON.stringify(finalState));
          return finalState as any;
        });
      }, 1500);
    }
  };

  useEffect(() => {
    if (!isOnline) return;
    
    setNotesSyncState(prev => {
       let hasPending = false;
       const next = { ...prev };
       Object.keys(next).forEach(k => {
         if (next[k] === 'pending') {
           next[k] = 'syncing';
           hasPending = true;
         }
       });
       
       if (hasPending) {
         setTimeout(() => {
            setNotesSyncState(curr => {
               const finalState = { ...curr };
               Object.keys(finalState).forEach(k => {
                 if (finalState[k] === 'syncing') finalState[k] = 'synced';
               });
               localStorage.setItem('io_session_notes_sync', JSON.stringify(finalState));
               return finalState as any;
            });
         }, 2000);
       }
       
       return hasPending ? next : prev;
    });
  }, [isOnline]);

  // Profile & Saved Sessions State
  const [savedSessions, setSavedSessions] = useState<string[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('io_saved_sessions');
    const notifs = localStorage.getItem('io_notifications_enabled');
    if (saved) setSavedSessions(JSON.parse(saved));
    if (notifs) setNotificationsEnabled(JSON.parse(notifs));
  }, []);

  const toggleSavedSession = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedSessions(prev => {
      const next = prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id];
      localStorage.setItem('io_saved_sessions', JSON.stringify(next));
      return next;
    });
  };

  const toggleNotifications = async () => {
    if (!notificationsEnabled) {
      try {
        if (typeof window !== 'undefined' && 'Notification' in window) {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
             setNotificationsEnabled(true);
             localStorage.setItem('io_notifications_enabled', JSON.stringify(true));
             new Notification("Notifications Enabled!", { body: "You will be reminded 15 mins before saved sessions."});
          } else {
             alert("Notification permission denied by browser.");
          }
        } else {
          // Fallback for isolated environments without Notification API
          setNotificationsEnabled(true);
          localStorage.setItem('io_notifications_enabled', JSON.stringify(true));
          alert("Push notifications simulated (Notification API unavailable).");
        }
      } catch (err) {
         console.warn("Notification API error:", err);
         // Graceful fallback for iframes where Notification API might throw
         setNotificationsEnabled(true);
         localStorage.setItem('io_notifications_enabled', JSON.stringify(true));
         alert("Push notifications simulated (bypassed iframe restrictions).");
      }
    } else {
      setNotificationsEnabled(false);
      localStorage.setItem('io_notifications_enabled', JSON.stringify(false));
    }
  };

  // Notification Scheduler
  useEffect(() => {
    if (!notificationsEnabled || typeof window === 'undefined' || !('Notification' in window) || Notification.permission !== 'granted') return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    savedSessions.forEach(id => {
      const session = SESSIONS.find(s => s.id === id);
      if (!session) return;
      
      const [timeStr, ampm] = session.time.split(' ');
      const [hoursStr, minutesStr] = timeStr.split(':');
      let hours = parseInt(hoursStr, 10);
      if (ampm === 'PM' && hours !== 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      
      const sessionDate = new Date();
      sessionDate.setHours(hours, parseInt(minutesStr, 10), 0, 0);
      
      // 15 mins before
      const notifyTime = sessionDate.getTime() - 15 * 60 * 1000;
      const delay = notifyTime - Date.now();
      
      if (delay > 0 && delay < 24 * 60 * 60 * 1000) {
        const t = setTimeout(() => {
          new Notification('Upcoming Session', {
            body: `${session.title} starts in 15 minutes at ${session.loc}.`,
          });
        }, delay);
        timeouts.push(t);
      }
    });

    return () => timeouts.forEach(clearTimeout);
  }, [notificationsEnabled, savedSessions]);

  // Gemma Chat State
  const upcomingSession = SESSIONS[1];
  const upcomingSpeaker = SPEAKERS.find(s => upcomingSession.speakerIds.includes(s.id));
  
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I'm running entirely on your device right now via the Antigravity engine. No internet needed. <br/><br/>I've analyzed your schedule. You have 30 minutes until <strong>${upcomingSession.title}</strong>. I can guide you to ${upcomingSession.loc} via AR, or we can prep for the session. What do you need?`
    }
  ]);

  const quickReplies = [
    `Directions to ${upcomingSession.loc}`,
    `Who is ${upcomingSpeaker?.name.split(' ')[0]}?`,
    `Summarize ${upcomingSession.title}`,
    `Any food nearby?`
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setChatInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: "I am running locally via the Antigravity Engine. Generating response..." }]);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
      className="flex-1 bg-[#F8F9FA] flex flex-col sm:max-w-md sm:mx-auto w-full relative sm:shadow-2xl overflow-hidden h-[100dvh]"
    >
      {/* Offline Banner */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#202124] text-white px-6 py-2.5 flex items-center justify-center gap-2 text-xs font-bold tracking-wide z-30 relative shadow-inner"
          >
            <WifiOff className="w-3.5 h-3.5 text-purple-400" />
            <span>Offline Mode • Viewing Cached Schedule</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!activeSession && !isGemmaRoute && !isProfileRoute ? (
          <motion.div
            key="dashboard-home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-y-auto pb-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative"
          >
        {/* Header - Profile and Date */}
        <header className="px-6 pt-12 pb-6 flex justify-between items-start sticky top-0 bg-[#F8F9FA]/80 backdrop-blur-xl z-20">
          <div>
            <p className="text-[#707A8A] text-sm font-semibold tracking-wide uppercase">May 14 • Day 1</p>
            <h1 className="text-[28px] font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mt-1 tracking-tight leading-none">Welcome to I/O '26</h1>
          </div>
          <div className="relative hover:scale-105 transition-transform cursor-pointer">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <Image 
                src="https://picsum.photos/seed/techspeaker/100/100" 
                alt="Profile" 
                width={44}
                height={44}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Active badge */}
            <div className="absolute top-0 -right-1 w-3.5 h-3.5 bg-[#9334E6] rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </header>

        {/* Main personalized widget powered by Gemma */}
        <section className="px-6 mb-8 mt-2">
          <div className="bg-gradient-to-br from-[#4285F4] via-[#9334E6] to-[#EA4335] rounded-[28px] p-6 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute right-0 top-0 opacity-[0.07] translate-x-4 -translate-y-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 ease-out">
              <Cpu className="w-56 h-56" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white/90 font-bold tracking-widest text-[10px] bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm ring-1 ring-white/20 uppercase">
                  <Sparkles className="w-3 h-3 text-purple-200" />
                  Curated by Gemma 4 • Next Up
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-[24px] font-bold font-display leading-[1.15] pr-2 text-white tracking-tight flex-1">
                  Google I/O Keynote: The Antigravity Era
                </h2>
                
                {/* Real-time Countdown */}
                {timeLeft && (
                  <div className="bg-white/95 backdrop-blur text-[#9334E6] px-3 py-2 rounded-xl flex flex-col items-center justify-center shrink-0 min-w-[64px] shadow-lg border border-purple-100 mt-1">
                    <span className="text-[18px] font-bold font-mono leading-none tracking-tighter">
                      {String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
                    </span>
                    <span className="text-[8px] uppercase tracking-widest font-extrabold opacity-70 mt-1">Starts In</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-purple-100 mb-6 font-medium tracking-wide opacity-90">
                <MapPin className="w-3.5 h-3.5" /> Shoreline Amphitheatre
              </div>
              
              <div className="flex gap-3">
                <button className="bg-white text-[#9334E6] px-4 py-2.5 rounded-[14px] text-[13px] font-bold shadow-sm hover:bg-purple-50 transition-colors flex-1 flex justify-center items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Live Q&A
                </button>
                <button className="bg-black/20 text-white px-5 py-2.5 rounded-[14px] text-[13px] font-bold backdrop-blur-md border border-white/20 hover:bg-black/30 transition-colors">
                  Deep Dive
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Action Grid */}
        <section className="px-6 mb-10">
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Calendar, label: 'Schedule', color: 'bg-blue-50 hover:bg-blue-100', text: 'text-blue-600', requiresNetwork: false },
              { icon: Terminal, label: 'Codelabs', color: 'bg-emerald-50 hover:bg-emerald-100', text: 'text-emerald-600', requiresNetwork: true },
              { icon: Bot, label: 'Ask Gemma', color: 'bg-purple-50 hover:bg-purple-100', text: 'text-purple-600', requiresNetwork: false },
              { icon: Code2, label: 'AI Studio', color: 'bg-pink-50 hover:bg-pink-100', text: 'text-pink-600', requiresNetwork: true }
            ].map((item, idx) => {
              const isDisabled = !isOnline && item.requiresNetwork;
              return (
                <button key={idx} disabled={isDisabled} onClick={() => { if(item.label === 'Ask Gemma') window.location.hash = '#gemma'; }} className={`flex flex-col items-center gap-2.5 group relative ${isDisabled ? 'opacity-40 cursor-not-allowed grayscale' : ''}`}>
                  <div className={`${item.color} ${item.text} w-14 h-14 rounded-[20px] flex items-center justify-center transition-all duration-300 ${isDisabled ? '' : 'group-hover:scale-105 group-hover:shadow-sm'}`}>
                    <item.icon className="w-6 h-6 stroke-[1.5]" />
                    {isDisabled && (
                      <div className="absolute top-0 right-0 bg-[#202124] text-white p-0.5 rounded-full border border-[#F8F9FA]">
                         <WifiOff className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-bold tracking-wide text-[#5F6368]">{item.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Personalized Schedule */}
        <section className="px-6">
          <div className="flex justify-between items-end mb-5">
            <h3 className="text-xl font-bold font-display text-[#202124] tracking-tight">Your AI & Web Track</h3>
            <button className="text-[#9334E6] text-[13px] font-bold hover:underline bg-purple-50/50 px-2.5 py-1 rounded-lg">See Full</button>
          </div>
          
          <div className="space-y-4">
            {SESSIONS.map((session, i) => (
              <div 
                key={i} 
                onClick={() => { window.location.hash = `#session-${session.id}` }}
                className="bg-white rounded-[20px] p-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] border border-gray-100/80 flex gap-4 items-stretch cursor-pointer hover:border-[#8AB4F8] hover:shadow-[0_4px_16px_-4px_rgba(26,115,232,0.15)] transition-all"
              >
                {/* Time Indicator */}
                <div className="flex flex-col items-end min-w-[54px] pt-1.5">
                  <span className="text-[15px] font-extrabold text-[#202124] leading-none">{session.time.split(' ')[0]}</span>
                  <span className="text-[10px] font-bold text-[#707A8A] mt-1.5 uppercase tracking-widest">{session.time.split(' ')[1]}</span>
                </div>
                
                {/* Visual Line */}
                <div className="w-[3px] bg-gray-100 rounded-full relative overflow-hidden flex-shrink-0">
                  <div className={`absolute top-0 w-full h-8 rounded-full ${session.lineColor}`}></div>
                </div>

                {/* Content */}
                <div className="flex-1 py-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded flex items-center justify-center uppercase tracking-wider border ${session.tagColor}`}>
                      {session.tag}
                    </span>
                    <span className="text-[11px] text-[#707A8A] font-bold tracking-wide">{session.duration}</span>
                  </div>
                  <h4 className="font-extrabold text-[15px] text-[#202124] leading-[1.3] mb-2 pr-4 tracking-tight">{session.title}</h4>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#707A8A] font-bold tracking-wide mb-3">
                    <MapPin className="w-3 h-3 text-[#9CA3AF]" strokeWidth={2.5} /> {session.loc}
                  </div>
                  
                  {/* Speakers */}
                  <div className="flex flex-wrap gap-2">
                    {session.speakerIds.map(sId => {
                      const speaker = SPEAKERS.find(s => s.id === sId);
                      if(!speaker) return null;
                      return (
                        <button 
                          key={speaker.id}
                          onClick={(e) => { e.stopPropagation(); setActiveSpeakerId(speaker.id); }}
                          className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full pr-2.5 p-0.5 hover:bg-purple-50 hover:border-purple-200 transition-colors"
                        >
                          <Image src={speaker.img} alt={speaker.name} width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
                          <span className="text-[10px] font-bold text-gray-700">{speaker.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
          </motion.div>
        ) : activeSession ? (
          <motion.div
            key="session-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-y-auto pb-24 bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-20"
          >
            {/* Header */}
            <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full border border-gray-100 hover:bg-gray-100 transition-colors shrink-0"
                  aria-label="Back"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <h2 className="text-lg font-bold text-gray-900 tracking-tight flex-1 truncate">Session Details</h2>
              </div>
              <button onClick={() => toggleSavedSession(activeSession.id)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
                  <Bookmark className={`w-5 h-5 ${savedSessions.includes(activeSession.id) ? 'fill-[#9334E6] text-[#9334E6]' : 'text-gray-500'}`} />
              </button>
            </header>

            {/* Hero / Meta */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center justify-center uppercase tracking-wider border ${activeSession.tagColor}`}>
                  {activeSession.tag}
                </span>
                <span className="text-[12px] text-[#707A8A] font-bold tracking-wide">{activeSession.duration}</span>
              </div>
              <h1 className="text-2xl font-display font-extrabold text-[#202124] leading-[1.2] tracking-tight mb-4">
                {activeSession.title}
              </h1>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-[14px] text-[#3C4043] font-medium tracking-wide">
                  <Calendar className="w-4 h-4 text-[#9CA3AF]" /> May 14, {activeSession.time}
                </div>
                <div className="flex items-center gap-2 text-[14px] text-[#3C4043] font-medium tracking-wide">
                  <MapPin className="w-4 h-4 text-[#9CA3AF]" /> {activeSession.loc}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-2 w-full bg-gray-50 my-2"></div>

            {/* Gemma On-Device Insight */}
            <div className="px-6 py-4">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100/50 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-5 blur-sm mix-blend-multiply">
                  <Bot className="w-24 h-24 text-purple-600" />
                </div>
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <div className="bg-purple-100 p-1 rounded-md">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <span className="text-purple-900 font-bold text-[10px] uppercase tracking-widest">Gemma's TL;DR • On-Device Sync</span>
                </div>
                <p className="text-purple-800 text-[14px] leading-[1.5] relative z-10 font-medium">
                  "{activeSession.title}" covers advanced implementations. Since you've attended mostly Web track sessions today, focus on how they deploy the inference engine via WebAssembly. I've prepared 3 suggested questions for the Q&A.
                </p>
                <button className="mt-3 text-[#9334E6] text-[12px] font-bold tracking-wide flex items-center gap-1 hover:text-purple-800 transition-colors">
                  Generate Questions <ChevronLeft className="w-3 h-3 rotate-180" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="px-6 pb-6 pt-2">
              <h3 className="text-[13px] font-bold text-[#707A8A] uppercase tracking-widest mb-3">Overview</h3>
              <p className="text-[#3C4043] text-[16px] leading-[1.6]">
                {activeSession.description}
              </p>
            </div>

            {/* Private Notes Context */}
            <div className="px-6 pb-6 mt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-[13px] font-bold text-[#707A8A] uppercase tracking-widest flex items-center gap-1.5">
                  <Edit2 className="w-3.5 h-3.5" /> Private Notes
                </h3>
                {notesSyncState[activeSession.id] === 'synced' && (
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Synced
                  </span>
                )}
                {notesSyncState[activeSession.id] === 'pending' && (
                  <span className="text-[10px] text-orange-600 font-bold flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-full ring-1 ring-orange-200">
                    <CloudOff className="w-3 h-3" /> Saved Locally
                  </span>
                )}
                {notesSyncState[activeSession.id] === 'syncing' && (
                  <span className="text-[10px] text-blue-600 font-bold flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full ring-1 ring-blue-200">
                    <RefreshCw className="w-3 h-3 animate-spin" /> Syncing...
                  </span>
                )}
              </div>
              <textarea
                value={notes[activeSession.id] || ''}
                onChange={(e) => handleNoteChange(activeSession.id, e.target.value)}
                placeholder="Jot down your private thoughts from this session..."
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl p-4 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 transition-all resize-none min-h-[120px] shadow-sm"
              />
            </div>

            {/* Speakers */}
            {activeSession.speakerIds.length > 0 && (
              <div className="px-6 pb-8">
                <h3 className="text-[13px] font-bold text-[#707A8A] uppercase tracking-widest mb-4">Speakers</h3>
                <div className="flex flex-col gap-3">
                  {activeSession.speakerIds.map(sId => {
                    const speaker = SPEAKERS.find(s => s.id === sId);
                    if(!speaker) return null;
                    return (
                      <div 
                        key={speaker.id}
                        onClick={() => setActiveSpeakerId(speaker.id)}
                        className="flex items-center gap-4 bg-gray-50/50 border border-gray-100 p-3 rounded-2xl cursor-pointer hover:bg-purple-50/30 hover:border-purple-200 transition-all group"
                      >
                        <Image src={speaker.img} alt={speaker.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" />
                        <div className="flex-1">
                          <h4 className="font-bold text-[#202124] text-[15px]">{speaker.name}</h4>
                          <p className="text-[#707A8A] text-[12px] font-medium">{speaker.role}, {speaker.company}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Sessions */}
            {activeSession && (
              (() => {
                const related = SESSIONS.filter(s => 
                  s.id !== activeSession.id && 
                  (s.speakerIds.some(id => activeSession.speakerIds.includes(id)) || s.tag === activeSession.tag)
                );
                if (related.length === 0) return null;
                return (
                  <div className="px-6 pb-8">
                    <h3 className="text-[13px] font-bold text-[#707A8A] uppercase tracking-widest mb-4">Related Sessions</h3>
                    <div className="space-y-3">
                      {related.map(session => (
                        <div 
                          key={session.id} 
                          onClick={() => { window.location.hash = `#session-${session.id}`; }}
                          className="bg-[#F8F9FA] rounded-[16px] p-3 border border-gray-100 flex gap-3 items-center cursor-pointer hover:border-purple-200 hover:bg-purple-50/50 transition-colors group"
                        >
                          <div className={`w-1.5 h-10 rounded-full ${session.lineColor}`}></div>
                          <div className="flex-1">
                            <p className="text-[11px] font-bold text-[#707A8A] tracking-wider uppercase mb-0.5">{session.time} • {session.loc}</p>
                            <h5 className="font-extrabold text-[13px] text-[#202124] leading-tight pr-2 group-hover:text-[#9334E6] transition-colors">{session.title}</h5>
                          </div>
                          <div className="shrink-0 p-2 bg-white rounded-full shadow-sm text-gray-400 group-hover:text-[#9334E6] transition-colors">
                             <ArrowLeft className="w-4 h-4 rotate-180" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()
            )}

            {/* Related Links */}
            {activeSession.links && activeSession.links.length > 0 && (
              <div className="px-6 pb-12">
                <h3 className="text-[13px] font-bold text-[#707A8A] uppercase tracking-widest mb-4">Resources</h3>
                <div className="flex flex-col gap-2.5">
                  {activeSession.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      className="flex items-center justify-between p-4 bg-blue-50/30 border border-blue-100 rounded-2xl text-blue-700 hover:bg-blue-50 transition-colors group"
                    >
                      <span className="font-bold text-[14px] tracking-wide">{link.title}</span>
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : isGemmaRoute ? (
          <motion.div
            key="gemma-ui"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col bg-white z-20 h-[100dvh] pb-[76px]"
          >
            {/* Header */}
            <header className="px-6 py-4 flex items-center gap-3 sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full border border-gray-100 hover:bg-gray-100 transition-colors shrink-0"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9334E6] to-[#EA4335] flex items-center justify-center shadow-md">
                   <ChevronUp className="w-6 h-6 text-white stroke-[3]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight leading-none">Gemma On-Device</h2>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> E4B Engine Active
                  </div>
                </div>
              </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 [&::-webkit-scrollbar]:hidden">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-[#9334E6]" />
                    </div>
                  )}
                  <div 
                    className={`rounded-2xl p-4 text-[14px] leading-relaxed max-w-[85%] ${
                      msg.role === 'user' 
                        ? 'bg-[#9334E6] text-white rounded-tr-sm' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              ))}
            </div>

            {/* Quick Replies & Input */}
            <div className="bg-white border-t border-gray-100 flex flex-col">
              <div className="flex overflow-x-auto gap-2 px-4 py-3 [&::-webkit-scrollbar]:hidden">
                {quickReplies.map((reply, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(reply)}
                    className="whitespace-nowrap px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-[13px] font-medium hover:bg-purple-100 transition-colors shrink-0"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              <div className="px-4 pb-4">
                <div className="relative">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSend(chatInput);
                    }}
                    placeholder="Ask anything securely..." 
                    className="w-full bg-gray-100 border-none rounded-full py-3.5 pl-5 pr-12 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-medium placeholder:text-gray-400"
                  />
                  <button 
                    onClick={() => handleSend(chatInput)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#9334E6] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </button>
                </div>
                <div className="text-center mt-2 flex items-center justify-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    100% Private On-Device Processing
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : isProfileRoute ? (
          <motion.div
            key="profile-ui"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-y-auto pb-24 bg-[#F8F9FA] [&::-webkit-scrollbar]:hidden z-20"
          >
            <header className="px-6 py-6 pb-2 pt-12 flex items-center justify-between sticky top-0 bg-[#F8F9FA]/90 backdrop-blur-xl z-20">
              <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Profile & Settings</h2>
            </header>
            
            <div className="p-6 space-y-6">
              {/* User Identity */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 shrink-0">
                   <Image src="https://picsum.photos/seed/techspeaker/200/200" alt="Profile" width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">Alex Developer</h3>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">L3 Attendee</p>
                </div>
              </div>

              {/* Settings Group */}
              <div>
                 <h4 className="text-[12px] font-bold text-[#707A8A] uppercase tracking-widest mb-3 pl-2">Preferences</h4>
                 <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-5 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${notificationsEnabled ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
                            {notificationsEnabled ? <Bell className="w-5 h-5" /> : <BellOff className="w-5 h-5" />}
                          </div>
                          <div>
                            <div className="font-bold text-[15px] text-gray-900">Push Notifications</div>
                            <div className="text-[12px] text-gray-500 font-medium mt-0.5">Remind 15 mins before sessions</div>
                          </div>
                       </div>
                       
                       <button onClick={toggleNotifications} className={`w-12 h-6 rounded-full transition-colors relative flex items-center shrink-0 ${notificationsEnabled ? 'bg-purple-600' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow-sm absolute transition-transform transform ${notificationsEnabled ? 'translate-x-[26px]' : 'translate-x-[2px]'}`}></div>
                       </button>
                    </div>
                 </div>
              </div>
              
              {/* Saved Sessions list */}
              <div>
                 <h4 className="text-[12px] font-bold text-[#707A8A] uppercase tracking-widest mb-3 pl-2">Your Schedule ({savedSessions.length})</h4>
                 <div className="space-y-3">
                    {savedSessions.length === 0 ? (
                       <div className="text-center py-6 text-gray-400 text-sm font-medium">No sessions saved yet.</div>
                    ) : (
                       savedSessions.map(id => {
                         const session = SESSIONS.find(s => s.id === id);
                         if(!session) return null;
                         return (
                            <div key={id} onClick={() => { window.location.hash = `#session-${id}`; }} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3 items-center cursor-pointer hover:border-purple-200 transition-colors">
                               <div className={`w-1 h-8 rounded-full ${session.lineColor}`}></div>
                               <div className="flex-1">
                                  <h5 className="font-extrabold text-[13px] text-gray-900 leading-tight truncate">{session.title}</h5>
                                  <p className="text-[11px] font-bold text-gray-500 uppercase mt-1 tracking-wide">{session.time} • {session.loc}</p>
                               </div>
                               <button onClick={(e) => toggleSavedSession(id, e)} className="p-2 text-[#9334E6] hover:bg-purple-50 rounded-full transition-colors mt-auto mb-auto">
                                  <Bookmark className="w-4 h-4 fill-current" />
                               </button>
                            </div>
                         );
                       })
                    )}
                 </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Speaker Bottom Sheet Modal */}
      <AnimatePresence>
        {activeSpeakerId && activeSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveSpeakerId(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 w-full bg-white rounded-t-[32px] shadow-2xl flex flex-col h-[85vh] overflow-hidden"
            >
              {/* Drag Handle & Header */}
              <div className="flex flex-col items-center pt-3 pb-2 sticky top-0 bg-white/90 backdrop-blur z-20">
                <div className="w-10 h-1.5 bg-gray-200 rounded-full mb-3" />
                <div className="flex justify-between items-center w-full px-6">
                  <h3 className="font-bold text-[#202124] text-lg tracking-tight">Speaker Profile</h3>
                  <button onClick={() => setActiveSpeakerId(null)} className="p-1.5 bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-24 [&::-webkit-scrollbar]:hidden">
                {/* Speaker Header Info */}
                <div className="flex flex-col items-center mt-6 mb-8 text-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-purple-500/10">
                       <Image src={activeSpeaker.img} alt={activeSpeaker.name} width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-gray-100">
                      <div className="bg-[#1A73E8] p-1.5 rounded-full text-white">
                        <Code2 className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-[#202124] tracking-tight mb-1">{activeSpeaker.name}</h2>
                  <p className="text-[#1A73E8] font-bold text-sm tracking-wide">{activeSpeaker.role}</p>
                  <p className="text-[#707A8A] font-bold text-[13px] tracking-wide mt-0.5">{activeSpeaker.company}</p>
                </div>

                {/* Bio Block */}
                <div className="mb-10">
                  <h4 className="text-[12px] font-bold text-[#707A8A] uppercase tracking-widest mb-3">About</h4>
                  <p className="text-[#3C4043] leading-[1.6] text-[15px]">
                    {activeSpeaker.bio}
                  </p>
                </div>

                {/* Related Sessions */}
                <div>
                  <h4 className="text-[12px] font-bold text-[#707A8A] uppercase tracking-widest mb-4">Sessions by {activeSpeaker.name.split(' ')[0]}</h4>
                  <div className="space-y-3">
                    {SESSIONS.filter(s => s.speakerIds.includes(activeSpeakerId)).map(session => (
                      <div 
                        key={session.id} 
                        onClick={() => {
                          setActiveSpeakerId(null);
                          window.location.hash = `#session-${session.id}`;
                        }}
                        className="bg-[#F8F9FA] rounded-[16px] p-3 border border-gray-100 flex gap-3 items-center cursor-pointer hover:border-purple-200 hover:bg-purple-50/50 transition-colors group"
                      >
                        <div className={`w-1.5 h-10 rounded-full ${session.lineColor}`}></div>
                        <div className="flex-1">
                          <p className="text-[11px] font-bold text-[#707A8A] tracking-wider uppercase mb-0.5">{session.time}</p>
                          <h5 className="font-extrabold text-[13px] text-[#202124] leading-tight pr-2 group-hover:text-[#9334E6] transition-colors">{session.title}</h5>
                        </div>
                        <div className="shrink-0 p-2 bg-white rounded-full shadow-sm text-gray-400 group-hover:text-[#9334E6] transition-colors">
                           <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <AnimatePresence>
        {!activeSession && !isGemmaRoute && (
          <motion.nav 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200/60 px-6 pt-4 pb-6 flex justify-between items-center z-30 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]"
          >
            {[
              { icon: Home, label: 'Home', active: !isGemmaRoute && !isSessionRoute && !isProfileRoute },
              { icon: Calendar, label: 'Agenda', active: false },
              { icon: Bot, label: 'Gemma', active: isGemmaRoute },
              { icon: User, label: 'Profile', active: isProfileRoute },
            ].map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => {
                  if (item.label === 'Gemma') window.location.hash = '#gemma';
                  else if (item.label === 'Profile') window.location.hash = '#profile';
                  else if (item.label === 'Home') window.location.hash = '';
                }}
                className={`flex flex-col items-center gap-1 min-w-[64px] ${item.active ? 'text-[#9334E6]' : 'text-[#707A8A] hover:text-[#202124]'}`}
              >
                <div className={`relative ${item.active && 'bg-purple-50'} p-1.5 rounded-xl transition-colors`}>
                  <item.icon className={`w-6 h-6 ${item.active ? 'fill-purple-50 stroke-2 text-[#9334E6]' : 'stroke-2'}`} />
                </div>
                <span className={`text-[10px] font-bold tracking-wide ${item.active ? 'text-[#9334E6]' : 'text-[#707A8A]'}`}>{item.label}</span>
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
