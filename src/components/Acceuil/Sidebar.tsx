// components/Acceuil/Sidebar.jsx
'use client';

interface SidebarProps {
  user: { name: string };
  isOpen: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function Sidebar({ user, isOpen, onClose, isMobile = false }: SidebarProps) {
  const navigationItems = [
    { name: 'Mon Profil', href: '/profil', icon: 'fa-user' },
    { name: 'Aide', href: '/help', icon: 'fa-question-circle' },
    { name: 'Déconnexion', href: '/', icon: 'fa-sign-out-alt' }
  ];


  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      <aside className={`
        ${isMobile ? 'fixed' : 'relative'}
        left-0 top-0 h-full bg-blue-600 text-white
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isMobile ? 'w-64' : 'w-60'}
        ${isMobile ? 'pt-16' : 'pt-0'}
        flex flex-col
      `}>
        {/* En-tête utilisateur - masqué sur mobile car dans le header */}
        {!isMobile && (
          <div className="p-6 border-b border-blue-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{user.name}</h3>
                <p className="text-blue-200 text-xs">Développeur</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation principale */}
        <nav className="flex-1 px-4 py-6">
          {/* Menu utilisateur mobile */}
          {isMobile && (
            <div className="mb-6 pb-4 border-b border-blue-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-blue-200 text-sm">Développeur</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions utilisateur */}
          <div className="space-y-2 mb-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <i className={`fas ${item.icon} w-4`}></i>
                <span className="text-sm">{item.name}</span>
              </a>
            ))}
          </div>
        </nav>


      </aside>
    </>
  );
}