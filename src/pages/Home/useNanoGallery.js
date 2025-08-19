// useNanoGallery.js
import { useEffect } from "react";

const useNanoGallery = (galleryID, items) => {
    useEffect(() => {
        const initializeGallery = () => {
            if (window.jQuery && window.jQuery.fn.nanogallery2) {
                window.jQuery(`#${galleryID}`).nanogallery2({
                    itemsBaseURL: `./assets/images/`,
                    items: items,
                    galleryMaxRows: 2,
                    galleryDisplayMode: "rows",
                    thumbnailHeight: "300",
                    thumbnailWidth: "auto",
                    thumbnailAlignment: "scaled",
                    thumbnailGutterWidth: 10,
                    thumbnailGutterHeight: 10,
                    thumbnailBorderHorizontal: 2,
                    thumbnailBorderVertical: 2,
                    thumbnailLabel: {
                        valign: "bottom",
                        position: "overImage",
                        hideIcons: true,
                        display: true,
                        titleFontSize: "1.2em",
                        descriptionFontSize: "1.05em",
                    },
                    galleryDisplayTransitionDuration: 1500,
                    thumbnailDisplayTransition: "imageSlideUp",
                    thumbnailDisplayTransitionDuration: 1200,
                    thumbnailDisplayTransitionEasing: "easeInOutQuint",
                    thumbnailDisplayInterval: 60,
                    thumbnailBuildInit2: "image_scale_1.00",
                    thumbnailHoverEffect2:
                        "thumbnail_scale_1.00_1.00_300|image_scale_1.00_1.05",
                    touchAnimation: true,
                    touchAutoOpenDelay: 500,
                    viewerToolbar: { display: false },
                    viewerTools: {
                        topLeft: "label",
                        topRight: "shareButton, closeButton",
                    },
                    galleryTheme: {
                        thumbnail: {
                            background: "rgba(26, 26, 26, 0.8)",
                            borderColor: "rgba(212, 175, 55, 0.3)",
                        },
                    },
                    locationHash: true,
                    displayBreadcrumb: false,
                });
            } else {
                // Retry initialization after a short delay
                setTimeout(initializeGallery, 100);
            }
        };

        initializeGallery();

        // Clean-up function to destroy the gallery when the component unmounts
        return () => {
            if (window.jQuery && window.jQuery.fn.nanogallery2) {
                window.jQuery(`#${galleryID}`).nanogallery2('destroy');
            }
        };
    }, [galleryID, items]);
};

export default useNanoGallery;