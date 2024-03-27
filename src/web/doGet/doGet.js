function doGet(e) {
    runAllAutomatedTests()

    const response = Logger.getLog()

    return ContentService.createTextOutput(
        JSON.stringify(response)
    ).setMimeType(ContentService.MimeType.JSON)
}
