// useNanoGallery.js
import { useEffect } from "react";

const useNanoGallery = (galleryRef, items) => {
    useEffect(() => {
        // Capture the DOM element from the ref
        const galleryElement = galleryRef.current;

        const initializeGallery = () => {
            // Check if the element exists and if jQuery and the plugin are loaded
            if (galleryElement && window.jQuery && window.jQuery.fn.nanogallery2) {
                window.jQuery(galleryElement).nanogallery2({
                    itemsBaseURL: `./assets/images/`,
                    items: items,
                    galleryMaxRows: 1,
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
                        display: false,
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
                        topLeft: "title", // Change 'label' to 'title' to only show the title in the viewer
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
            } else if (galleryElement) {
                // If the element exists but the plugin isn't ready, retry.
                setTimeout(initializeGallery, 100);
            }
        };

        initializeGallery();

        // Clean-up function to destroy the gallery when the component unmounts
        return () => {
            // Use the captured element in the cleanup
            if (galleryElement && window.jQuery && window.jQuery.fn.nanogallery2) {
                // Safer check to ensure the plugin is initialized before destroying
                if (window.jQuery(galleryElement).data('nanogallery2')) {
                    window.jQuery(galleryElement).nanogallery2('destroy');
                }
            }
        };
    }, [galleryRef, items]); // Dependency array ensures the effect re-runs if the ref or items change
};

export default useNanoGallery;