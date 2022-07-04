import React from "react";
import "./PopOver.css";

function PopOver({
    title,
    onClose,
    extra,
    footer,
    children,
    show = true,
    showShadow = false,
    outSideClick = undefined,
    width = "",
    dir = "ltr",
    style = {},
    border = false,
    data = []
}) {
    if (!show) return null;

    return (
        <div dir={dir}>
            <div
                className="pop-over-component"
                style={{
                    zIndex: "11",
                    ...style,
                }}
            >
                <div className="pop-over-data">
                    {title && <div className="pop-over-title">{title}</div>}
                    {extra && <div className="pop-over-extra">{extra}</div>}
                    {onClose && <div className="pop-over-onclose">X</div>}
                    <div className="pop-over-content-wrapper">
                        {children && (
                            <div className="pop-over-content" style={{ width: width }}>
                                {children}
                            </div>
                        )}
                        {data && (
                            <div className="data-title">
                                {data?.map((item, index) => {
                                    return (
                                        <>
                                            {border && <hr />}
                                            <div key={index} className="data-title-item">
                                                {item.title}
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                    {footer && <div className="pop-over-footer">{footer}</div>}
                </div>
            </div>
            {(showShadow || outSideClick) && (
                <div
                    className="pop-over-show-shadow-wrapper"
                    onClick={() => outSideClick && outSideClick()}
                    style={{
                        backgroundColor: showShadow ? "rgba(0,0,0,0.3)" : "transparent",
                    }}
                />
            )}
        </div>
    );
}

export default PopOver;
