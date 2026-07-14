@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepo;

    @GetMapping("/userDetails/{id}")
    public ResponseEntity<UserResponse> getUserDetails(
            @PathVariable Long id) {

        User user = userRepo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        UserResponse response = new UserResponse(
                user.getId(),
                user.getName()
        );

        return ResponseEntity.ok(response);
    }
}