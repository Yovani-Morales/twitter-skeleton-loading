import { Head } from './Head';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { Post } from './Post';
import { Profile } from './Profile';

const Header = () => {
  return (
    <header>
      <Head />
      <section className='w-full h-[52.5px] fixed bottom-0 z-10 border-t border-very-dark-gray bg-black'>
        <div className='h-full'>
          <nav className='h-full'>
            <ul className='h-full list-none'>
              <section className='h-full'>
                <Logo />
                <Nav />
                <Post />
              </section>
              <section className='hidden'>
                <Profile />
              </section>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  )
}

export { Header };
