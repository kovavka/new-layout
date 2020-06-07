import * as React from "react";
import {classNames} from '../../services/ReactUtils';

type IProps = {
    text?: string
    showBack?: boolean
    showNext?: boolean
    isNextDisabled?: boolean
    showSave?: boolean
    isSaveDisabled?: boolean
    showHome?: boolean
    showRefresh?: boolean
    showAdd?: boolean
    showLog?: boolean
}

export class BottomPanel extends React.Component<IProps> {
    render() {
        const {
            text,
            showBack,
            showNext,
            isNextDisabled,
            showSave,
            isSaveDisabled,
            showHome,
            showRefresh,
            showAdd,
            showLog,
        } = this.props;

        const needRenderEmptyButton = showBack && !!text && !showNext && !showSave;

        return (
            <div className="bottom-panel">
                <div className="bottom-panel__inner">
                    {showBack && (
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#back"></use>
                            </svg>
                        </div>
                    )}
                    {!!text && (
                        <div className="bottom-panel__text">
                            {text}
                        </div>
                    )}
                    {needRenderEmptyButton && <div className="svg-button" />}
                    {showNext && (
                        <div className={classNames('svg-button', {'svg-button--disabled': isNextDisabled})}>
                            <svg>
                                <use xlinkHref="#next"></use>
                            </svg>
                        </div>
                    )}
                    {showSave && (
                        <div className={classNames('svg-button', {'svg-button--disabled': isSaveDisabled})}>
                            <svg>
                                <use xlinkHref="#save"></use>
                            </svg>
                        </div>
                    )}
                    {showHome && (
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#home"></use>
                            </svg>
                        </div>
                    )}
                    {showRefresh && (
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#refresh"></use>
                            </svg>
                        </div>
                    )}
                    {showAdd && (
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#plus"></use>
                            </svg>
                        </div>
                    )}
                    {showLog && (
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#log"></use>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}