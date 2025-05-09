export interface Job {
  id: number;
  title: string;
  department: string;
  type: 'full-time' | 'intern' | 'graduate';
  description: string;
  responsibilities: string[];
  qrCodeUrl: string; // In a real application, this would be a URL to an actual QR code image
  color: string;
}