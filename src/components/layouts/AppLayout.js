import React from "react";
import Team from "../illustrations/Team";


function AppLayout({ children }) {
    return (
        <div className="w-full flex min-h-screen">
            <div className="w-1/3 bg-gray-100">
                <div className="h-full flex items-center justify-center flex flex-col">
                    <h1 className="text-5xl font-bold">Dream Team</h1>
                    <span>Rejoignez les milliers de supporteurs à travers le monde...</span>
                    <Team />
                </div>
            </div>
            <div className="w-2/3 flex items-center">
                <div className="w-3/5 mx-auto">
                    { children }
                </div>

            </div>
        </div>
    )
}

export default AppLayout;