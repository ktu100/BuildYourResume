import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LayoutTemplate, Zap, Download, Menu, X } from 'lucide-react';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import { ProfileInfoCard } from "../components/Cards";
import { GrDocumentUpdate } from "react-icons/gr";


const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-200'>
      {/* Header */}
      <header className='fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-amber-100/50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-gradient-to-br from-amber-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200'>
              <LayoutTemplate className='w-5 h-5 text-black' />
            </div>
            <h1 className='text-2xl font-black bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text'>
              BuildYourResume
            </h1>
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden p-2 rounded-xl hover:bg-amber-50 transition-colors'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ?
              <X size={24} className='text-amber-600' /> :
              <Menu size={24} className='text-amber-600' />
            }
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className='relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-red-600 text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-200'
                onClick={() => setOpenAuthModal(true)}
              >
                <div className='absolute inset-0 bg-gradient-to-r from-amber-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <span className='relative'>Start The Process</span>
              </button>
            )}
          </div>
        </div>


        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className='md:hidden bg-black/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-amber-100/50 transition-all duration-300 ease-in-out'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4'>
              {user ? (
                <div className='flex flex-col gap-4 py-2'>
                  <div className='text-amber-700 font-medium text-center py-2 text-base sm:text-lg'>
                    Welcome back
                  </div>
                  <button
                    className='w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-red-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-200/50 transition-all'
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <button
                  className='w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-red-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-200/50 transition-all'
                  onClick={() => {
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Start the process
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className='pt-24'>
        {/* Hero Section */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
          <div className='flex flex-wrap justify-between gap-10 lg:gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-8'>
              <div className='inline-flex items-center gap-2 lg:gap-3 px-4 py-2 bg-teal-200 to-yellow-500 border border-amber-200 text-amber-700 rounded-full font-bold text-lg'>
                Need to make a Resume?
              </div>
              
              <h1 className='text-4xl sm:text-6xl lg:text-8xl font-black leading-tight flex'>
                <span className='block text-slate-900 mx-1'>Build</span>
                <span className='block text-slate-900 mx-1'>Your</span>
                <span className='block bg-gradient-to-r from-amber-600 via-red-600 to-pink-500 bg-clip-text mx-1'>Perfect</span>
                <span className='block text-slate-900 mx-1'>Resumes</span>
              </h1>
              
             <div className="flex">
               <img src="https://cdn.venngage.com/template/thumbnail/small/8df44329-87c2-4907-801d-8f335745a2b0.webp" className="w-90 h-100 object-cover rounded-lg shadow-md mt-0.5"></img>
             <GrDocumentUpdate size={250} className="ml-100"/>
              
             </div>
            
  <h3 className="text-emerald-800 text-4xl font-bold mb-2 ">
    Welcome to <span className="text-amber-400 font-mono">BuildYourResume</span>, your all-in-one solution to creating professional, polished resumes without the hassle.
  </h3>

  <ul className="list-disc list-inside space-y-2 text-2xl">
    <li>✨ Whether you're a fresher or an experienced pro, our tool helps you stand out.</li>
    <li>📄 Choose from stunning templates designed by hiring experts.</li>
    <li>🕓 Save time with pre-written content tailored to your industry and role.</li>
    <li>🌐 Download in PDF or share online with a public resume link.</li>
  </ul>


             
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  className='group relative px-10 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-200'
                  onClick={handleCTA}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-amber-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  <span className='relative flex items-center gap-2 sm:gap-3'>
                    Start Building
                    <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
                  </span>
                </button>

                <button onClick={handleCTA} className='px-8 sm:px-10 py-3 sm:py-4 border-2 border-amber-200 text-amber-700 font-bold rounded-2xl hover:border-amber-300 hover:bg-amber-50 transition-all'>
                  Templates
                </button>
              </div>

              {/* Stats */}
              <div className='flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-6'>
                {[
                  { value: '10K+', label: 'Resumes Created', gradient: 'from-amber-600 to-red-600' },
                  { value: '4.5★', label: 'User Rating', gradient: 'from-green-500 to-red-500' },
                  { value: '15 Min', label: 'Build Time', gradient: 'from-blue-500 to-teal-500' }
                ].map((stat, idx) => (
                  <div key={idx} className='text-center'>
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r bg-clip-text text-transparent ${stat.gradient}`}>{stat.value}</div>
                    <div className='text-xs sm:text-sm text-slate-500 font-medium'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
           
        </section>
       

        {/* Features Section */}
        <section className='bg-gradient-to-br from-amber-50 to-emerald-50 py-16 sm:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12 sm:mb-20'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6'>
                Why Choose <span className='bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent'>Us?</span>
              </h2>
              <p className='text-2xl text-blue-600 max-w-2xl mx-auto font-bold'>
               We provide everything that you need to create a professional resume which stands out
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
  {[
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />,
      title: "Quick And Simple",
      description: "In under 15 minutes, you can create professional resumes that land you your next job.",
      gradient: "bg-gradient-to-br from-amber-100 to-emerald-100",
      iconBg: "bg-gradient-to-tr from-amber-500 to-emerald-500"
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />,
      title: "Professional Templates",
      description: "Choose from dozens of recruiter-approved, industry-specific templates.",
      gradient: "bg-gradient-to-br from-amber-100 to-emerald-100",
      iconBg: "bg-gradient-to-tr from-amber-500 to-emerald-500"
    },
    {
      icon: <Download className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />,
      title: "Instant Download",
      description: "Download high-quality PDFs instantly",
      gradient: "bg-gradient-to-br from-amber-100 to-emerald-100",
      iconBg: "bg-gradient-to-tr from-amber-400 to-emerald-400"
    }
  ].map((feature, index) => (
    <div
      key={index}
      className={`relative overflow-hidden rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg ${feature.gradient}`}
    >
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
      <div className="relative z-10 p-6 space-y-4">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full shadow-inner text-white ${feature.iconBg}`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
        <p className="text-gray-700 text-2xl leading-relaxed font-bold">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 sm:py-24'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='relative'>
              <div className='absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-amber-200/50 to-red-200/50 rounded-3xl blur-3xl'></div>
              <div className='relative bg-gradient-to-br from-amber-300 to-emerald-50 border border-violet-100 rounded-3xl p-8 sm:p-16'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6'>
                  Ready to Build Your <span className='bg-gradient-to-r from-emerald-600 to-red-500 bg-clip-text text-transparent'>Standout Resume?</span>
                </h2>
                <p className='text-2xl font-bold text-shadow-amber-600 my-2'>
                  Get Your Dream Job with our professionally crafted Resumes
                </p>
                <button
                  className='group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-amber-600 to-red-600 text-black font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-200'
                  onClick={handleCTA}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  <span className='relative'>Start Building Now</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t border-amber-100 bg-gradient-to-r from-amber-50 to-red-50 py-6 sm:py-8'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-3xl text-lime-500 font-bold'>
             Made by{' '}
            <a href="https://www.linkedin.com/in/kartikey-ameta-4b992a35a/" target="_blank" className='hover:text-purple-400 underline'>
              Kartikey Ameta
            </a>
          </p>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;