import { UserContext } from 'hooks/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FiHome, FiAward, FiLogOut } from 'react-icons/fi';

import { Container, Icons, FlagSidebar } from './styles';

const Sidebar = () => {
  const router = useRouter();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <Container
      variants={{
        show: { opacity: 1, x: '0' },
        hidden: { opacity: 0, x: '-100%' },
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <aside>
        <header>
          <img src="icons/logo.svg" alt="Logo" />
        </header>
        <Icons>
          <div>
            {router.pathname === '/home' ? (
              <>
                <Link href="/home">
                  <a>
                    <FiHome className="active" />
                  </a>
                </Link>
                <FlagSidebar />
              </>
            ) : (
              <Link href="/home">
                <a>
                  <FiHome />
                </a>
              </Link>
            )}
          </div>
          <div>
            {router.pathname === '/challenges' ? (
              <>
                <Link href="/challenges">
                  <a>
                    <FiAward className="active" />
                  </a>
                </Link>
                <FlagSidebar />
              </>
            ) : (
              <Link href="/challenges">
                <a>
                  <FiAward />
                </a>
              </Link>
            )}
          </div>
        </Icons>
        <footer>
          <FiLogOut onClick={handleLogout} />
        </footer>
      </aside>
    </Container>
  );
};

export default Sidebar;
