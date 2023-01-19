import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter.jsx";

/**
 * The App component returns JSX element that renders Layout component which contains an AppRouter component.
 * @component
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <div className="app">
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    );
};

export default App;
