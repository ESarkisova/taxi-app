export const validateAddress = (address: string): boolean => {
    const [street, house=''] = address.toLowerCase().split(',')
    return /[А-Яа-яёЁ0-9\-\\s\\.\\/]+$/.test(street.trim()) && /^[0-9][А-Яа-яёЁ0-9\\/]*$/.test(house.trim())
    
}
