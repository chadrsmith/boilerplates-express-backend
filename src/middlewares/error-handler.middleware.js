module.exports = (err, _req, res, next) => {
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ message: 'File too large.' });
  }

  if (process.env.NODE_ENV === "dev") {
    console.error(err);
  }

  next(err);
}