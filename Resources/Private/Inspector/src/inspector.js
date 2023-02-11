import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

let currentlyFocusedInspectorName = null;

export const InspectorPlugin = (editor) => {

    // we only attach the inspector on focus; and we detach the last focused
    // editor - so that the currently focused editor is the only inspector being shown.
    editor.ui.focusTracker.on('change:isFocused', (event) => {
        if (event.source.isFocused) {
            if (currentlyFocusedInspectorName) {
                CKEditorInspector.detach(currentlyFocusedInspectorName);
            }
            currentlyFocusedInspectorName = `${editor.neos.contextPath}: ${editor.neos.propertyName}`;
            CKEditorInspector.attach(currentlyFocusedInspectorName, editor);
        }
    });
}
