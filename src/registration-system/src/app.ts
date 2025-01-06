import express from 'express';
import { json } from 'body-parser';
import { setMasterOwnerRoutes } from './routes/masterOwnerRoutes';
import { setClientRoutes } from './routes/clientRoutes';
import { setUserRoutes } from './routes/userRoutes';
import { setCleanerRoutes } from './routes/cleanerRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setMasterOwnerRoutes(app);
setClientRoutes(app);
setUserRoutes(app);
setCleanerRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});