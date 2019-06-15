import { Plugin } from 'ckeditor5-exports';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

let currentlyFocusedInspectorName = null;

export default class Inspector extends Plugin {
    static get pluginName() {
        return 'Inspector';
    }

    init() {
        // we only attach the inspector on focus; and we detach the last focused
        // editor - so that the currently focused editor is the only inspector being shown.
        this.editor.ui.focusTracker.on('change:isFocused', event => {
            if (event.source.isFocused) {
                if (currentlyFocusedInspectorName) {
                    CKEditorInspector.detach(currentlyFocusedInspectorName);
                }
                currentlyFocusedInspectorName = `${this.editor.neos.contextPath}: ${this.editor.neos.propertyName}`;
                CKEditorInspector.attach(currentlyFocusedInspectorName, this.editor);
            }
        });
    }
}
