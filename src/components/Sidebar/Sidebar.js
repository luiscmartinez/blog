import React from 'react';
import InlineLogo from '../InlineLogo';
import SidebarLink from './SidebarLink';
import './styles.scss';

class Sidebar extends React.Component {
    constructor() {
        super();
        // default state values
        this.state = {
            show: false,
            dpHover: false,
        };
    }

    render() {
        return (
            <div id="sidebarcontainer">
                <i
                    className={[
                        'fa',
                        'fa-bars',
                        'togglesidebar',
                        'open',
                        this.state.show ? 'hide' : '',
                    ]
                        .join(' ')
                        .trim()}
                    aria-hidden="true"
                    onClick={this.toggleSidebar}
                />
                <i
                    className={[
                        'fa',
                        'fa-times',
                        'togglesidebar',
                        'close',
                        this.state.show ? '' : 'hide',
                    ]
                        .join(' ')
                        .trim()}
                    aria-hidden="true"
                    onClick={this.toggleSidebar}
                />
                <div
                    id="sidebar"
                    className={this.state.show ? '' : 'hidesidebar'}
                >
                    <br />
                    <div
                        className="dpcontainer"
                        onMouseEnter={this.toggleShowDp}
                        onMouseLeave={this.toggleShowDp}
                    >
                        <div
                            id="sidebardp"
                            className={this.state.dpHover ? 'fade-out' : ''}
                        >
                            <InlineLogo />
                        </div>
                        <div
                            id="actualdp"
                            className={this.state.dpHover ? 'fade-in' : ''}
                        >
                            <img src="https://vutruhuyenbi.com/attachment/articles/heavenly_scroll_rain.png" />
                        </div>
                    </div>
                    <div className="sidebartext">
                        Hi, I&apos;m Luis Martinez. <br />I am a student of The
                        End Science: Metaphysics. If you want to get in touch{' '}
                        <br />
                        <a href="mailto:mrluismartinezzz@gmail.com">
                            send me an email
                        </a>
                        .
                    </div>
                    <SidebarLink
                        to="/"
                        external={false}
                        alt={true}
                        clickHandler={this.toggleSidebar}
                    >
                        Home
                    </SidebarLink>
                </div>
            </div>
        );
    }

    toggleSidebar = () => {
        if (this.state.show) {
            document.documentElement.classList.remove('disableScroll');
        } else {
            document.documentElement.classList.add('disableScroll');
        }
        this.setState({
            show: !this.state.show,
        });
    };

    toggleShowDp = () => {
        this.setState({
            dpHover: !this.state.dpHover,
        });
    };
}

export default Sidebar;
