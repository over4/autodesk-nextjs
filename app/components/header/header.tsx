import styles from './header.module.css'
import Image from 'next/image'
import SearchBar from '../search-bar/search-bar';

export default function Header() {
  return (
    <div className={styles.background}>
        <div className = {`${styles['header-wrapper']} flex justify-between items-center headerWrapper`}>
            <div className = "flex searchHomeWrapper">
                <div className='flex mx-6 homeButtonWrapper'>
                    <Image  className = "mx-3 py-3"
                            src="/icon-3.png"
                            width={32}
                            height={12}
                            alt="Picture"
                    />
                    <p className = {`${styles['large-font-home']} my-1`} >AUTODESK</p>
                </div>
                <div className = "searchBarWrapper my-1">
                    <SearchBar></SearchBar>
                </div>
            </div>
            <div className = "flex cartSignInWrapper">
                <div className = "mx-3 addToCartWrapper">
                <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
                <div className = "mx-3 localeWrapper">
                    <p>EN</p>
                </div>
                <div className = "mx-3 flex profileWrapper">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path> <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path> </g></svg>
                    <p>Sign In</p>
                </div>
            </div>
        </div>
    </div>
  );
}