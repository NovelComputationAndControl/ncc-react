import React from 'react';

const layout = (props) => {
    return (
        <>
            <div className="container">
                <JournalNavbar/>
            </div>
            {props.children}
            <header className="container-fluid">
                <JournalCarousel/>
            </header>
            <main>
                <div className="container-fluid py-5">
                    <div className="container">
                        <h1>
                            IEEE Transactions on Computers
                        </h1>
                        <p>

                            IEEE Transactions on Computers (TC) is a monthly publication that publishes research in
                            such areas as computer organizations and architectures, digital devices, operating
                            systems, and new and important applications and trends.
                            Will style later.</p>
                    </div>
                </div>
                <AuthorRow/>
                <StatisticsRow/>
            </main>
            <JournalFooter/>
        </>
    );
};

export default layout;