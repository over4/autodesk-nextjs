import styles from './header.module.css'


export default function Header() {
  return (
    <div className = {styles.header}>
        <div className = "flex justify-center headerWrapper">
            <div className = "flex searchHomeWrapper">
                <div className='homeButtonWrapper'>
                    <p>Home Button</p>
                </div>
                <div className = "searchBarWrapper">
                    <p>Search Bar</p>
                </div>
            </div>
            <div className = " flex cartSignInWrapper">
                <div className = "addToCartWrapper">
                    <p>Cart</p>
                </div>
                <div className = "localeWrapper">
                    <p>locale</p>
                </div>
                <div className = "profileWrapper">
                    <p>profile</p>
                </div>
            </div>
        </div>
    </div>
  );
}