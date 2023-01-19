/**
 * The Sidebar component for Dashboard page.
 * @returns {JSX.Element}
 */
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__activities">
                <li className="sidebar__item sidebar__item--yoga"></li>
                <li className="sidebar__item sidebar__item--swimming"></li>
                <li className="sidebar__item sidebar__item--cycling"></li>
                <li className="sidebar__item sidebar__item--strengthening"></li>
            </ul>
            <div className="sidebar__copyright">
                <p className="copyright-text">
                    Copyright, SportSee {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Sidebar;