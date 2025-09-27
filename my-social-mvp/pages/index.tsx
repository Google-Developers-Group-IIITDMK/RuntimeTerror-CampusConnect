import React from "react";

export default function FeedPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-80 bg-background-dark border-r border-gray-700/50 flex flex-col justify-between p-6 transition-all duration-300 ease-in-out overflow-x-hidden" id="sidebar">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 sidebar-profile">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCooqEJl3puPyxs-HqgojWMh8ZxbbXxLQpprFALhBaOhzCTUv7lf-9gSb-Sjg25koQvqWUPlqMinAlVjczXwqGF4A4giMTNsk9F3FvX1_fcSWvH-xVLjbQqbCe_5MALoddGkmtEiwaRpkgBkjILZInOEmw4OHFE9RO_bLWm9mU8hCzLvFDkaSFos58ebYuybo8Cej9easoE0cY_QDYJ1mKgRAITCsrBrMhtCTpDDBkMR-o8lypBalosm-sj2cF15h5lQ1Z4sCyBGG78QCuLpkqtskceXHzpgOveh9QUg9hsz2S_f_2EughG0yMEr")' }}
            ></div>
            <div className="sidebar-profile-info whitespace-nowrap">
              <h1 className="font-bold text-lg text-white">Sophia Carter</h1>
              <p className="text-sm text-gray-400">sophia.carter@email.com</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary/20 text-primary font-bold" href="#">
              <svg className="shrink-0" fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
              <span className="sidebar-text whitespace-nowrap">Feed</span>
            </a>
            {/* other sidebar links here ... */}
          </nav>
        </div>
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors" href="#">
            <svg className="shrink-0" fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
            <span className="sidebar-text whitespace-nowrap">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80 w-[calc(100%-40rem)] overflow-y-auto no-scrollbar" id="main-content">
        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-gray-700/50 bg-background-dark/80 backdrop-blur-sm px-10 py-4">
          <div className="flex items-center gap-3 text-white">
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h2 className="text-xl font-bold">Campus Feed</h2>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Post Box */}
          <div className="flex gap-4 p-4 bg-card-bg rounded-xl border border-gray-700/50">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSC65UnAuRa6MQvGQbiaZ6VPVUBvjE64Q0KF7y3T1GojwsMfaZvAwjNO2mKudFyRa9kacsdZTqZM3xZkrqGTyiAQEJHDYwySHeSYuE-ZyC8SXDfyVs9t40ysQ8KQTtw9qtqn_UnsVHwv4HLoqn2rSE3mquZBx0LAfgITYHZs0eGkNQZsgJrJxTlgfUnC703b5Gi9B5LFguOpjqDyeD9AYDFDPe5YfSfm0HgYZg81akstBGgJJgGeHDLxEcirX30tW3s76U2ECTJwkI")' }}
            ></div>
            <div className="flex-1">
              <textarea className="w-full resize-none bg-transparent focus:outline-none placeholder-gray-400 text-lg" placeholder="What's on your mind?"></textarea>
              <div className="flex justify-between items-center mt-2">
                <button className="text-gray-400 hover:text-primary transition-colors">📷</button>
                <button className="bg-primary text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity">Post</button>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="space-y-6">
            {/* Example Post */}
            <div className="bg-card-bg rounded-xl overflow-hidden border border-gray-700/50">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlXtPTs6XXzNBDn0cSb5NLHXxBqxVPEdGyuRBKf2VZQ_x2I_abfSjC1B0_Tgb4Gz5kUJ6zRtyVB_VT5a_Wa3t2zzCR1J0MM4Tnh0MzETXBtJhibh-NtaBaAgNvIlg78yF-Dnb7ojvT6FEdFZxdp4tTdNxnwVecIhnqNFgkWcKSpHRhfobeCNuIAnkOMe9X26EATJGSRk_VKBZJIBAOjOYE5peFhde5m8GOOWFqWpaXBbGTRexRmX9PBKrwcATrk8JwH_cwPmcyTkzZ")' }}
                    ></div>
                    <div>
                      <p className="font-bold text-white">Ethan Bennett</p>
                      <p className="text-sm text-gray-400">ethan.bennett@email.com · 2d</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-text-color">
                  Excited to announce I've joined the team at Innovate Solutions as a Junior Software Engineer! Looking forward to contributing to innovative projects and learning from the best in the industry. #tech #softwareengineering #newbeginnings
                </p>
              </div>
              <div className="p-2">
                <img
                  alt="Post image"
                  className="w-full h-auto object-cover rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlXtPTs6XXzNBDn0cSb5NLHXxBqxVPEdGyuRBKf2VZQ_x2I_abfSjC1B0_Tgb4Gz5kUJ6zRtyVB_VT5a_Wa3t2zzCR1J0MM4Tnh0MzETXBtJhibh-NtaBaAgNvIlg78yF-Dnb7ojvT6FEdFZxdp4tTdNxnwVecIhnqNFgkWcKSpHRhfobeCNuIAnkOMe9X26EATJGSRk_VKBZJIBAOjOYE5peFhde5m8GOOWFqWpaXBbGTRexRmX9PBKrwcATrk8JwH_cwPmcyTkzZ"
                />
              </div>
            </div>

            {/* Add more posts as needed */}
          </div>
        </div>
      </main>
    </div>
  );
}
