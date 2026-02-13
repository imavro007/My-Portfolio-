
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";import { db } from './firebase';

// Components
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

// Data Management
import { Project } from './types';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_admin_authenticated') === 'true';
  });

  // Real-time synchronization with Firestore
  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projectsData: Project[] = [];
      querySnapshot.forEach((doc) => {
        projectsData.push({ ...doc.data(), id: doc.id } as Project);
      });
      setProjects(projectsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addProject = async (p: Project) => {
    try {
      const { id, ...projectData } = p; // Remove temporary ID
      await addDoc(collection(db, "projects"), projectData);
    } catch (e) {
      console.error("Error adding project: ", e);
    }
  };

  const updateProject = async (p: Project) => {
    try {
      const projectRef = doc(db, "projects", p.id);
      const { id, ...projectData } = p;
      await updateDoc(projectRef, projectData);
    } catch (e) {
      console.error("Error updating project: ", e);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, "projects", id));
    } catch (e) {
      console.error("Error deleting project: ", e);
    }
  };

  const reorderProjects = (newOrder: Project[]) => {
    // Note: True reordering in Firestore usually requires a 'sortIndex' field
    // For now, this is handled by the local sync order
    setProjects(newOrder);
  };

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('is_admin_authenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('is_admin_authenticated');
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-background font-sans text-white selection:bg-accent selection:text-white">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage projects={projects} />} />
              <Route 
                path="/admin/login" 
                element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLoginPage onLogin={login} />} 
              />
              <Route 
                path="/admin/dashboard" 
                element={
                  isAuthenticated ? (
                    <AdminDashboard 
                      projects={projects} 
                      onAdd={addProject} 
                      onUpdate={updateProject} 
                      onDelete={deleteProject} 
                      onReorder={reorderProjects}
                      onLogout={logout} 
                    />
                  ) : (
                    <Navigate to="/admin/login" />
                  )
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
