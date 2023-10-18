import React, { useState } from 'react';
import { Button as ShadecnButton } from '@/components/ui/button';
import { Card as ShadecnCard } from '@/components/ui/card';
import { Dialog as ShadecnDialog } from '@/components/ui/dialog';
import { Progress as ShadecnProgress } from '@/components/ui/progress';
import { Table as ShadecnTable } from '@/components/ui/table';
import { Button, Card, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableHead, TableRow, LinearProgress } from '@mui/material';
import '../styles/styles.css';

const Home: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate the file upload and estimation process
      setTimeout(() => {
        setIsUploading(false);
        setShowDialog(true);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-gradient-to-r from-blue-200 to-green-200 md:p-10">
      <header className="mt-5 text-3xl font-bold text-gray-800 md:mt-10 md:text-4xl">My Food Diary App</header>
      
      <main className="flex flex-col items-center justify-center flex-1 space-y-4 md:space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">Hello, [Username]!</h2>
        <p className="text-gray-700 md:text-lg text-center">It's time to log your meal. Choose and Upload a picture to start your food diary entry.</p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button variant="contained" color="primary" onClick={() => document.getElementById('mealPicture')?.click()}>
            Upload Picture
          </Button>
          <input id="mealPicture" type="file" onChange={handleFileUpload} className="hidden" />
        </div>
        {isUploading && <LinearProgress color="primary" className="w-full mt-4" />}
      </main>
      
      {showDialog && (
        <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
          <DialogTitle>Nutritional Information</DialogTitle>
          <DialogContent>
            <Card>
              <img src="https://via.placeholder.com/150" alt="Meal" className="mb-4 rounded-lg" />
              <Table className="w-full">
                <TableHead>
                  <TableRow>
                    <TableCell>Nutrient</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Calories</TableCell>
                    <TableCell align="right">250 kcal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protein</TableCell>
                    <TableCell align="right">20g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Carbs</TableCell>
                    <TableCell align="right">30g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fats</TableCell>
                    <TableCell align="right">10g</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </DialogContent>
        </Dialog>
      )}
      
      <footer className="mb-5 text-sm text-gray-800 md:mb-10 md:text-base">© 2023 Food Diary</footer>
    </div>
  );
}

export default Home;
