
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => { console.error("Error", err); next(err) })
    }

}
export { asyncHandler }

