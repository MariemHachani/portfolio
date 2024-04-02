import { useState } from 'react';
import { FormData } from '../contact_form';

export function sendEmail(data: FormData): boolean {
  // TODO: send email
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    //.then((res) => res.json())
    .then((response) => {
      return true;
    })
    .catch((err) => {
     return false;
    });
    return true;
}

