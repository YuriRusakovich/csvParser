const validator = require('validator');

let validators: ((obj: object, validationInfo: object) => object|boolean)[] = [
  validateAge,
  validateName,
  validateSurname,
  validateMail,
  validateDate,
  validatePhone,
  validateTime
];

export function validateAge(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!validator.isNumeric(obj['Age'])) {
    validationInfo['Age'] = {
      value: obj['Age'],
      errors: ['������� ������ ���� ������']
    };
    isValid = false;
  }

  if (!validator.isInt(obj['Age'], {min: 1, max: 99})) {
    if(validationInfo.hasOwnProperty('Age')) {
      ['errors'].push('��������� ������� �� 1 �� 99');
    } else {
      validationInfo['Age'] = {
        value: obj['Age'],
        errors: ['��������� ������� �� 1 �� 99']
      };
    }
    isValid = false;
  }

  return isValid;
}


export function validateName(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!validator.isAlpha(obj['Name'])) {
    validationInfo['Name'] = {
      value: obj['Name'],
      errors: ['��� ������ �������� ������ �� ����']
    };
    isValid = false;
  }

  if (!validator.isLength(obj['Name'], {min: 1, max: 20})) {
    if(validationInfo.hasOwnProperty('Name')) {
      ['errors'].push('��������� ����� �� 1 �� 20 ��������');
    } else {
      validationInfo['Name'] = {
        value: obj['Name'],
        errors: ['��������� ����� �� 1 �� 20 ��������']
      };
    }
    isValid = false;
  }

  return isValid;
}


export function validateSurname(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!validator.isAlpha(obj['Surname'])) {
    validationInfo['Surname'] = {
      value: obj['Surname'],
      errors: ['������� ������ �������� ������ �� ����']
    };
    isValid = false;
  }

  if (!validator.isLength(obj['Surname'], {min: 1, max: 20})) {
    if(validationInfo.hasOwnProperty('Surname')) {
      ['errors'].push('��������� ����� �� 1 �� 20 ��������');
    } else {
      validationInfo['Surname'] = {
        value: obj['Surname'],
        errors: ['��������� ����� �� 1 �� 20 ��������']
      };
    }
    isValid = false;
  }

  return isValid;
}


export function validateMail(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!validator.isEmail(obj['Mail'], {domain_specific_validation: true})){
    validationInfo['Mail'] = {
      value: obj['Mail'],
      errors: ['�������� ������ �����']
    };
    isValid = false;
  }

  return isValid;
}


export function validateDate(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!validator.isBefore(obj['DateOfReg'])){
    validationInfo['DateOfReg'] = {
      value: obj['DateOfReg'],
      errors: ['�������� ����']
    };
    isValid = false;
  }

  return isValid;
}


export function validatePhone(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!/^\+?375 ?(17|29|33|44|25) ?\d{7}$/.test(obj['Phone'])) {
    validationInfo['Phone'] = {
      value: obj['Phone'],
      errors: ['�������� ������ ��������']
    };
    isValid = false;
  }

  return isValid;
}


export function validateTime(obj: object, validationInfo: object): boolean {
  let isValid: boolean = true;

  if(!/^([0-1]\d)|(2[0-4])(:|.)[0-5]\d$/.test(obj['Time'])) {
    validationInfo['Time'] = {
      value: obj['Time'],
      errors: ['�������� ������ �������']
    };
    isValid = false;
  }

  return isValid;
}

export function validate(obj: object): object {
   let isValid: boolean = true;
   let validationInfo: object = {};

   for (let i = 0; i < validators.length; i++) {
      if (!validators[i](obj, validationInfo)) {
        isValid = false;
     }
   }

   return {
     isValid: isValid,
     validationInfo: validationInfo
   };
 }