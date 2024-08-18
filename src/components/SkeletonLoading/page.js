import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto py-12 px-4 lg:px-24">
            {/* Product Image and Details */}
            <div className="flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-lg shadow-lg animate-pulse">
                <div className="lg:w-1/2 flex justify-center items-center bg-gray-900 rounded-lg overflow-hidden">
                    <div className="w-full h-96 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                </div>

                <div className="lg:w-1/2 text-white">
                    <div className="h-12 w-3/4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg mb-6 animate-pulse"></div>
                    <div className="h-6 w-1/2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg mb-6 animate-pulse"></div>
                    <div className="flex items-center mb-6 space-x-4">
                        <div className="h-10 w-24 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                        <div className="h-6 w-16 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                        <div className="h-8 w-16 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                    </div>

                    <div className="w-full h-12 bg-blue-700 rounded-lg animate-pulse mb-8"></div>

                    <div className="grid grid-cols-2 gap-6 text-lg">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Reviews and Ratings */}
            <div className="mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-lg shadow-lg animate-pulse">
                <div className="h-10 w-2/3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg mb-8 animate-pulse"></div>
                <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg border-b border-gray-600">
                            <div className="flex items-center mb-4 space-x-4">
                                <div className="h-8 w-8 bg-yellow-500 rounded-full animate-pulse"></div>
                                <div className="h-6 w-16 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                            </div>
                            <div className="h-4 w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg mb-4 animate-pulse"></div>
                            <div className="h-3 w-1/3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page