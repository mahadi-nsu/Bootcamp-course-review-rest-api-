exports.getBootcamps = (req, res, next) => {

    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    })

}

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show single bootcamp'
    })

}

exports.createBootcamp = (req, res, next) => {
    const itemId = req.params.id;
    console.log(itemId);
    res.status(201).json({
        success: true,
        message: 'create new bootcamp'
    })

}

exports.updateBootcamp = (req, res, next) => {
    const itemId = req.params.id;
    console.log(itemId);
    res.status(200).json({
        success: true,
        message: `Bootcamp update for ${itemId}`
    })

}
exports.deleteBootcamp = (req, res, next) => {
    const itemId = req.params.id;
    console.log(itemId);
    res.status(200).json({
        success: true,
        message: `Bootcamp delete for ${itemId}`
    })

}