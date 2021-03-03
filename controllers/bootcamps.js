// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Show single bootcamp",
  });
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = (req, res, next) => {
  const itemId = req.params.id;
  console.log(itemId);
  res.status(201).json({
    success: true,
    message: "create new bootcamp",
  });
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  const itemId = req.params.id;
  console.log(itemId);
  res.status(200).json({
    success: true,
    message: `Bootcamp update for ${itemId}`,
  });
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  const itemId = req.params.id;
  console.log(itemId);
  res.status(200).json({
    success: true,
    message: `Bootcamp delete for ${itemId}`,
  });
};
