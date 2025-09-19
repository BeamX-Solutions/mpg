import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { Wifi, WifiOff, AlertCircle } from 'lucide-react';

export const ApiStatus: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkConnection = async () => {
    setIsChecking(true);
    try {
      const connected = await apiService.healthCheck();
      setIsConnected(connected);
    } catch {
      setIsConnected(false);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkConnection();
    
    // Check connection every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    if (isConnected === null || isChecking) return 'text-yellow-600 bg-yellow-50';
    return isConnected 
      ? 'text-green-600 bg-green-50' 
      : 'text-red-600 bg-red-50';
  };

  const getStatusText = () => {
    if (isChecking) return 'Checking...';
    if (isConnected === null) return 'Unknown';
    return isConnected ? 'Connected' : 'Offline';
  };

  const getIcon = () => {
    if (isChecking || isConnected === null) {
      return <AlertCircle className="h-4 w-4" />;
    }
    return isConnected ? (
      <Wifi className="h-4 w-4" />
    ) : (
      <WifiOff className="h-4 w-4" />
    );
  };

  return (
    <div 
      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${getStatusColor()}`}
      onClick={checkConnection}
      title="Click to refresh connection status"
    >
      {getIcon()}
      <span>Backend: {getStatusText()}</span>
    </div>
  );
};