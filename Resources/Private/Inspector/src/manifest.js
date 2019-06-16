import React, {PureComponent} from 'react';
import manifest from '@neos-project/neos-ui-extensibility';
import { $add } from 'plow-js';
import Inspector from './inspector';
import './style.vanilla-css';

manifest('Sandstorm.CkEditorInspector:Inspector', {}, globalRegistry => {
    const config = globalRegistry.get('ckEditor5').get('config');

    // Add the "Inspector" plugin to the list of plugins; so that the CKEditor inspector is loaded.
    config.set('sandstorm_ckeditorInspector', ckEditorConfiguration => {
        return $add('plugins', Inspector, ckEditorConfiguration);
    });

    // We wrap the left and right sidebar with an extra div where we know the class name;
    // so that we can manipulate the sidebar's CSS to set some paddings; and same for content canvas.
    const containerRegistry = globalRegistry.get('containers');
    containerRegistry.set('LeftSideBar', wrapComponent(containerRegistry.get('LeftSideBar'), 'sandstorm_ckeditorinspector_leftSideBarWrapper'));
    containerRegistry.set('RightSideBar', wrapComponent(containerRegistry.get('RightSideBar'), 'sandstorm_ckeditorinspector_rightSideBarWrapper'));
    containerRegistry.set('ContentCanvas', wrapComponent(containerRegistry.get('ContentCanvas'), 'sandstorm_ckeditorinspector_contentCanvasWrapper'));
});

/**
 * wrapComponent wraps a <div class="..."> around the
 * passed-in component; so that we can target the subcomponent via CSS;
 * to adjust its styling.
 */
function wrapComponent(InnerComponent, className) {
    return class LeftAndRightSideBarWrapper extends PureComponent {
        render() {
            return (
                <div className={className}>
                    <InnerComponent {...this.props} />
                </div>
            );
        }
    }
}
