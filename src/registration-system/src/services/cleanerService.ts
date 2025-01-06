export class CleanerService {
    private cleaners: any[] = [];

    public createCleaner(name: string, phone: string, cpf: string, pixKey: string) {
        const cleaner = { name, phone, cpf, pixKey };
        this.cleaners.push(cleaner);
        return cleaner;
    }

    public getCleaners() {
        return this.cleaners;
    }

    public getCleaner(cpf: string) {
        return this.cleaners.find(cleaner => cleaner.cpf === cpf);
    }

    public updateCleaner(cpf: string, updatedData: Partial<{ name: string; phone: string; pixKey: string }>) {
        const cleanerIndex = this.cleaners.findIndex(cleaner => cleaner.cpf === cpf);
        if (cleanerIndex !== -1) {
            this.cleaners[cleanerIndex] = { ...this.cleaners[cleanerIndex], ...updatedData };
            return this.cleaners[cleanerIndex];
        }
        return null;
    }

    public deleteCleaner(cpf: string) {
        const cleanerIndex = this.cleaners.findIndex(cleaner => cleaner.cpf === cpf);
        if (cleanerIndex !== -1) {
            return this.cleaners.splice(cleanerIndex, 1)[0];
        }
        return null;
    }
}