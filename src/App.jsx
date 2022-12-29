import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter.jsx";

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
