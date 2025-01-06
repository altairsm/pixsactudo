export default function setClientRoutes(app) {
    const clientController = require('../controllers/clientController');

    app.post('/clients', clientController.createClient);
    app.get('/clients', clientController.getClients);
}