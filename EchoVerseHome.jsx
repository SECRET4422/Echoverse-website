import React from "react";

export default function EchoVerseHome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-widest">ECHOVERSE</h1>
        <nav className="space-x-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#download" className="hover:underline">Download Beta</a>
          <a href="#waitlist" className="hover:underline">Join Waitlist</a>
        </nav>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Echo AI – Your Mind. Amplified.</h2>
        <p className="text-gray-400 text-lg mb-8">Crafted with ChatGPT</p>
        <div className="mx-auto mb-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 shadow-lg"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="rounded-lg shadow-md bg-gray-900 h-32 flex items-center justify-center">Chat UI</div>
          <div className="rounded-lg shadow-md bg-gray-900 h-32 flex items-center justify-center">Echo Alert</div>
          <div className="rounded-lg shadow-md bg-gray-900 h-32 flex items-center justify-center">Voice</div>
          <div className="rounded-lg shadow-md bg-gray-900 h-32 flex items-center justify-center">Deep Search</div>
        </div>
        <div className="text-2xl font-semibold mb-4">PHASE 1 LAUNCH</div>
        <div className="text-3xl font-mono mb-4">23 Days : 03 Hours : 16 Minutes : 07 Seconds</div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg" id="download">Download Beta</button>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2024 EchoVerse AI
      </footer>
    </div>
  );
}