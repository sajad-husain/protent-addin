export function insertTagAtCursor(text: string): void {
    // safety check for side-loaded add-ins
    if (!window.Office) return;

    Word.run(async (context) => {
        const range = context.document.getSelection(); // cursor position
        range.insertText(`{{${text}}}`, Word.InsertLocation.replace); // {{Timestamp}} etc.
        await context.sync();
    }).catch((error) => {
        console.error(error);
        if (error.debugInfo) console.error(error.debugInfo);
    });
}