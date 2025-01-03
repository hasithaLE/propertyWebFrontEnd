import './feedPage.css';
import Nav from '../nav/nav';
import Search from '../search/search';

function FeedPage() {
    return (
        <>
        <div className='feed-page-hero'>
        <Nav/>
        <h1>Feed Page</h1>
        <Search/>
        </div>
        </>
    );
}

export default FeedPage;