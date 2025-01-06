export default function setCleanerRoutes(app) {
    const CleanerController = require('../controllers/cleanerController');

    app.post('/cleaners', CleanerController.createCleaner);
    app.get('/cleaners', CleanerController.getCleaners);
}