'use client';

import Sidebar from "./components/Sidebar";

export default  function Layout({ children }) {
    return (
        <main className="flex">
            <Sidebar />
            <section>
                {children}
            </section>
        </main>
    )
}