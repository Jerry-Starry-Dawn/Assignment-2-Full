namespace Service.Models.Payload.Requests.Publisher;

public class UpdatePublisherRequest
{
    public string Name { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
}