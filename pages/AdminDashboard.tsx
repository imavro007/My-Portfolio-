
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, LogOut, Search, ChevronDown, Save } from 'lucide-react';
import { Project, Category } from '../types';
import { CATEGORIES } from '../constants';

interface AdminDashboardProps {
  projects: Project[];
  onAdd: (p: Project) => void;
  onUpdate: (p: Project) => void;
  onDelete: (id: string) => void;
  onReorder: (projects: Project[]) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ projects, onAdd, onUpdate, onDelete, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const projectData: Project = {
      id: editingProject?.id || Date.now().toString(),
      title: formData.get('title') as string,
      category: formData.get('category') as Category,
      image: formData.get('image') as string || 'https://picsum.photos/seed/placeholder/800/600',
      description: formData.get('description') as string,
      tools: (formData.get('tools') as string).split(',').map(t => t.trim()),
      link: formData.get('link') as string,
      date: new Date().toISOString(),
    };

    if (editingProject) {
      onUpdate(projectData);
    } else {
      onAdd(projectData);
    }
    
    setIsModalOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="p-6 lg:p-20 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-display font-bold">Dashboard</h1>
            <p className="text-white/40">Welcome back, Mehedi. Manage your projects below.</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => { setEditingProject(null); setIsModalOpen(true); }}
              className="bg-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2"
            >
              <Plus size={18} /> Add Project
            </button>
            <button 
              onClick={onLogout}
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white/50 hover:text-white transition-colors"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden mb-12">
          <div className="p-8 border-b border-white/5 flex items-center gap-4">
            <Search className="text-white/20" size={20} />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="bg-transparent border-none w-full focus:outline-none text-lg text-white"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs uppercase tracking-widest text-white/40 border-b border-white/5">
                  <th className="px-8 py-6">Project</th>
                  <th className="px-8 py-6">Category</th>
                  <th className="px-8 py-6">Tools</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map(project => (
                  <tr key={project.id} className="group hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img src={project.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                        <span className="font-bold">{project.title}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full">{project.category}</span>
                    </td>
                    <td className="px-8 py-6 text-sm text-white/40">
                      {project.tools.slice(0, 2).join(', ')}{project.tools.length > 2 ? '...' : ''}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => { setEditingProject(project); setIsModalOpen(true); }}
                          className="p-2 text-white/40 hover:text-white"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => onDelete(project.id)}
                          className="p-2 text-white/40 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Admin Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-md">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-surface w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <form onSubmit={handleSave} className="p-10 space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {editingProject ? 'Edit Project' : 'New Project'}
                  </h2>
                  <button 
                    type="button" 
                    onClick={() => { setIsModalOpen(false); setEditingProject(null); }} 
                    className="text-white/40 hover:text-white text-sm font-bold uppercase tracking-widest"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-bold tracking-widest text-white/40">Title</label>
                      <input 
                        name="title" 
                        defaultValue={editingProject?.title} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs uppercase font-bold tracking-widest text-white/40">Category</label>
                      <div className="relative">
                        <select 
                          name="category" 
                          defaultValue={editingProject?.category} 
                          className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-accent appearance-none relative z-10"
                        >
                          {CATEGORIES.map(c => (
                            <option key={c} value={c} className="bg-surface text-white">
                              {c}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none z-0" size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-widest text-white/40">Image URL</label>
                    <input 
                      name="image" 
                      defaultValue={editingProject?.image} 
                      placeholder="https://..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-widest text-white/40">Description</label>
                    <textarea 
                      name="description" 
                      defaultValue={editingProject?.description} 
                      rows={3} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white resize-none focus:border-accent outline-none" 
                      required 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-widest text-white/40">Tools (Comma separated)</label>
                    <input 
                      name="tools" 
                      defaultValue={editingProject?.tools.join(', ')} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none" 
                      placeholder="AI, PS, React..." 
                      required 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold tracking-widest text-white/40">Live Link (Optional)</label>
                    <input 
                      name="link" 
                      defaultValue={editingProject?.link} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none" 
                      placeholder="https://..." 
                    />
                  </div>
                </div>

                <button className="w-full bg-accent hover:bg-blue-600 py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mt-8 transition-colors">
                  <Save size={18} /> {editingProject ? 'Update' : 'Publish'} Project
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
