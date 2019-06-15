import manifest from '@neos-project/neos-ui-extensibility';
import {$add} from 'plow-js';
import Inspector from './inspector';

manifest('Sandstorm.CkEditorInspector:Inspector', {}, globalRegistry => {
    const config = globalRegistry.get('ckEditor5').get('config');

    // Add the "Inspector" plugin to the list of plugins; so that the CKEditor inspector is loaded.
    config.set('sandstorm_ckeditorInspector', ckEditorConfiguration => {
        return $add('plugins', Inspector, ckEditorConfiguration);
    });
});
