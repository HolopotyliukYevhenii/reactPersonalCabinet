// src/pages/MainPage/ui/MainPage.tsx
import React, { useEffect, useState } from 'react';

import { ButtonLink } from 'src/shared/ui/ButtonLink/ButtonLink';


export const LoginPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  

  return (
    <div>
      <h1>Login Page</h1>
      <ButtonLink href='/adminPanel' >Administrator-Panel</ButtonLink>
      <ButtonLink href='/userPanel' > Benutzer-Panel </ButtonLink>
      
    </div>
  );
};
