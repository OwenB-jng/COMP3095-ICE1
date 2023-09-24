package ca.gbc.productservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
// Data is accessor to mutators
// All Args / No Args / Builder all allow to instantiate objects
// in line
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductResponse {

    private String id;
    private String name;
    private String description;
    private BigDecimal price;
}