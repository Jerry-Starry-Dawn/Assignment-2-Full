namespace Service.Models.Payload.Requests.Publisher;

public class CreatePublisherRequest
{
    public string Name { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
}