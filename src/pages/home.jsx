import React from "react";
import { motion } from "framer-motion";

const MENU = {
  "Main Course": [
    { name: "Cheeseburger", price: 200, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Cheese Sandwich", price: 250, image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Chicken Burgers", price: 300, image: "https://images.unsplash.com/photo-1606755962773-d324e1c3d4e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Spicy Chicken", price: 350, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Hot Dog", price: 350, image: "https://images.unsplash.com/photo-1611729808144-4a0f8e2c1c5c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
  ],
  Appetizers: [
    { name: "Fruit Salad", price: 100, image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Cocktails", price: 200, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Nuggets", price: 300, image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Sandwich", price: 100, image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "French Fries", price: 250, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
  ],
  Beverages: [
    { name: "Milk Shake", price: 50, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Iced Tea", price: 60, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Orange Juice", price: 70, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Lemon Tea", price: 20, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Coffee", price: 90, image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" },
  ],
};

export default function Home() {






  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-orange-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 flex flex-col items-center px-6 py-12">
        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
            <div className="bg-black rounded-full p-4">
              <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-4">
             MENU
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">Crafted with Passion • Served with Excellence</p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Premium Menu Cards */}
        <div className="max-w-7xl w-full grid lg:grid-cols-3 gap-8">
          {/* MAIN COURSE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  MAIN COURSE
                </h2>
              </div>
              
              <div className="space-y-6">
                {MENU["Main Course"].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group/item flex items-center p-4 rounded-2xl bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-orange-500/10 hover:to-red-500/10 border border-gray-600/30 hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover/item:text-orange-300 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-400">Premium Quality</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        ₹{item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* APPETIZERS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  APPETIZERS
                </h2>
              </div>
              
              <div className="space-y-6">
                {MENU.Appetizers.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group/item flex items-center p-4 rounded-2xl bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-orange-500/10 hover:to-red-500/10 border border-gray-600/30 hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover/item:text-orange-300 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-400">Fresh & Tasty</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        ₹{item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BEVERAGES */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  BEVERAGES
                </h2>
              </div>
              
              <div className="space-y-6">
                {MENU.Beverages.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="group/item flex items-center p-4 rounded-2xl bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-orange-500/10 hover:to-red-500/10 border border-gray-600/30 hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover/item:text-orange-300 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-400">Refreshing</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        ₹{item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20 max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Premium Dining Experience
              </span>
            </div>
            <p className="text-gray-300 font-medium mb-2">Crafted with Excellence • Served with Passion</p>
            <p className="text-sm text-orange-400 font-semibold">© 2025 Premium Menu. All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
