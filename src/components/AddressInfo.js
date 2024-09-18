import { Box, Input } from '@mui/material';
import React from 'react';

function AddressInfo({ formData, handleChange, errors }) {
    return (
        <div>
            <br />
            <h4>Step 2: Address Information</h4>
            <br />
            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="text"
                    name="address1"
                    placeholder="Address Line 1"
                    value={formData.address1}
                    onChange={handleChange}
                    className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
                />
                {errors.address1 && <div className="invalid-feedback">{errors.address1}</div>}
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="text"
                    name="address2"
                    placeholder="Address Line 2"
                    value={formData.address2}
                    onChange={handleChange}
                    className={`form-control ${errors.address2 ? 'is-invalid' : ''}`}
                />
                {errors.address2 && <div className="invalid-feedback">{errors.address2}</div>}
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                />
                {errors.city && <span className="error">{errors.city}</span>}
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                />
                {errors.state && <span className="error">{errors.state}</span>}
            </Box>

            <Box sx={{ marginBottom: 2 }}>
                <Input
                    type="number"
                    name="zip"
                    placeholder="Zip Code"
                    value={formData.zip}
                    onChange={handleChange}
                    className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                />
                {errors.zip && <span className="error">{errors.zip}</span>}
            </Box>
        </div>
    );
}

export default AddressInfo;
