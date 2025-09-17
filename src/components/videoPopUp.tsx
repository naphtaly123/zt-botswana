// function VideoPopUp() {
//     return(
//     <div className="mt-7 sm:mt-0 sm:ml-3">
//         <a href="#" className="watch-btn py-3 px-6 border border-transparent font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center">
//             <i className="fas fa-play-circle"></i> Watch video
//         </a>
                    
//     </div>);
//     }
// export default VideoPopUp;
import { useState } from 'react';

const VideoPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <div className="mt-7 sm:mt-0 sm:ml-3">
                <button 
                    onClick={openModal}
                    className="watch-btn py-3 px-6 border border-transparent font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center"
                >
                    <i className="fas fa-play-circle mr-2"></i> Watch video
                </button>
            </div>

            {/* Video Modal */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 fade-in"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-2xl scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 bg-gray-800 flex justify-between items-center">
                            {/* <h3 className="text-white font-semibold">Demo Video</h3> */}
                            <button 
                                onClick={closeModal}
                                className="text-white hover:text-gray-300"
                            >
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                           
                            <iframe 
                                className="absolute top-0 left-0 w-full h-full" 
                                src="https://res.cloudinary.com/dh3ktp1w6/video/upload/v1744880806/Zimele_Tech_Botswana_ghi0qp.mp4" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        {/* <div className="p-4 bg-gray-100">
                            <p className="text-gray-700">This is a sample video demonstration.</p>
                        </div> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoPopUp;